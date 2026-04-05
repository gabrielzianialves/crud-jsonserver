import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, FlatList, TextInput, ActivityIndicator, Alert, TouchableOpacity } from "react-native";
import { Search } from "lucide-react-native";
import styles from "../styles/styles";
import { getPeople, deletePerson } from "../servers/peopleCrud";
import CardPersonal from "../components/CardPersonal";
import { API_URL } from "../servers/configApi";

export default function HomeScreen({ navigation }) {

    const [people, setPeople] = useState([]);
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // função para carregar dados
    async function loadPeople() {
        setLoading(true);
        setError(null);

        try {
            const data = await getPeople();
            setPeople(data);
        }
        catch (error) {
            console.error(error);
            setError("Erro ao carregar as pessoas.");
            Alert.alert("Erro", "Não foi possível carregar os dados das pessoas.");
            setPeople([]);
        }
        finally {
            setLoading(false);
        }
    }

    // executa ao abrir tela
    useEffect(() => {
        loadPeople();
    }, []);

    useEffect(() => {
        if (query === ''){
            loadPeople();
        }
        else {
            fetchPeople(query);
        }
    }, [query]);

    async function fetchPeople(query) {
        setLoading(true);
        setError(null);

        try{
            // busca todos os dados
            const response = await fetch(`${API_URL}/people`);
            const data = await response.json();

            // filtra no frontend
            const q = query.toLowerCase().trim();
            const filtered = data.filter(person =>
                person.firstName.toLowerCase().includes(q) ||
                person.lastName.toLowerCase().includes(q) ||
                person.email.toLowerCase().includes(q) ||
                person.phone.includes(q)
            );
            setPeople(filtered);

        }
        catch (error){
            console.error(error);
            setError("Erro ao buscar pessoas");
            Alert.alert("Erro", "Falha na busca das pessoas.");
            setPeople([]);
        }
        finally{
            setLoading(false);
        }
    }

    return(
        <ScrollView style={{ backgroundColor: "#EEE8DF" }} contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>

                <Text style={styles.title}>Pessoas</Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("AddEdit")}
                >
                    <Text style={styles.buttonText}>Adicionar Pessoa</Text>
                </TouchableOpacity>  
                
                <View style={styles.searchContainer}>
                    <Search size={20} color="#171940" />

                    <TextInput
                        style={styles.searchInput}
                        placeholder="Pesquisar pessoas"
                        placeholderTextColor="#555"
                        value={query}
                        onChangeText={setQuery}
                    />
                </View>

                {loading ? (
                    <ActivityIndicator size="large" color="#171940" style={{ marginTop: 20 }} />
                ) : error ? (
                    <Text style={{ color: "red", marginTop: 20 }}>
                        {error}
                    </Text>
                ) : (
                    <FlatList
                        data={people}
                        keyExtractor={(item) => item.id.toString()}

                        renderItem={({ item }) => (
                            <CardPersonal
                                item={item}
                                navigation={navigation}
                                refresh={loadPeople}
                            />
                        )}
                    />
                )}

            </View>
        </ScrollView>
    );
}