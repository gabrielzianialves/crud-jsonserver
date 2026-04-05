import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, Alert } from "react-native";
import styles from "../styles/styles";
import { createPerson, updatePerson } from "../servers/peopleCrud";

export default function AddEditScreen({ route, navigation }) {
 
    const person = route.params?.person;

    const [firstName, setFirstName] = useState(person?.firstName || "");
    const [lastName, setLastName] = useState(person?.lastName || "");
    const [email, setEmail] = useState(person?.email || "");
    const [phone, setPhone] = useState(person?.phone || "");

    async function save(){

        const data = { firstName, lastName, email, phone };

        if(person) {
            await updatePerson(person.id, data);
        }
        else {
            await createPerson(data);
        }
        navigation.goBack();
    }

    function isValidPhone(phone) {
        const onlyNumbers = phone.replace(/\D/g, "");
        return onlyNumbers.length === 11 && /^\d+$/.test(onlyNumbers);
    }

    async function handleSubmit() {
        if (!isValidPhone(phone)){
            Alert.alert("Erro", "Número de telefone inválido, digite novamente");
            return;
        }
        await save();
    }

    return(

        <View style={styles.container}>

            <Text style={styles.title}>Adicionar Pessoa</Text>

            <TextInput
                placeholder="First Name"
                value={firstName}
                onChangeText={setFirstName}
                style={styles.input}
            />

            <TextInput
                placeholder="Last Name"
                value={lastName}
                onChangeText={setLastName}
                style={styles.input}
            />

            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
            />

            <TextInput
                placeholder="Phone"
                value={phone}
                onChangeText={setPhone}
                style={styles.input}
            />

            <TouchableOpacity
                style={styles.button}
                title="Salvar"
                onPress={handleSubmit}
            >
                <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                title="Cancelar"
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>

        </View>
    );
}