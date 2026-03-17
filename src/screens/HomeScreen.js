import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Button } from "react-native";
import styles from "../styles/styles";
import { getPeople, deletePerson } from "../servers/peopleCrud";

export default function HomeScreen({ navigation }) {

    // estado da lista
    const [people, setPeople] = useState([]);

    // função para carregar dados
    async function loadPeople(){

        const data = await getPeople();
        setPeople(data);

    }

    // executa ao abrir tela
    useEffect(() => {
        loadPeople();
    }, []);

    return(

        <View style={styles.container}>

            <Text style={styles.title}>Pessoas</Text>

            <Button
                title="Adicionar Pessoa"
                onPress={() => navigation.navigate("AddEdit")}
            />

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

        </View>
    );
}