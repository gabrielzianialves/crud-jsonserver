import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/styles";
import { Pencil, Trash } from 'lucide-react-native';
import { deletePerson } from "../servers/peopleCrud";

export default function CardPersonal({ item, navigation, refresh }){

    return(
        <View style={styles.card}>
            <View>
                <Text style={styles.name}>
                    {item.firstName} {item.lastName}
                </Text>

                <Text style={styles.email}>
                    {item.email}
                </Text>

                <Text style={styles.phone}>
                    {item.phone}
                </Text>
            </View>
            
            <View>

                <TouchableOpacity
                    style={styles.editRemoveButton}
                    title="Editar"
                    onPress={() => navigation.navigate("AddEdit", { person: item })}
                >
                    <Pencil size={16} color={"white"}/>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.editRemoveButton}
                    title="Deletar"
                    onPress={async () => {
                        await deletePerson(item.id);
                        refresh();
                    }}
                >
                    <Trash size={16} color={"white"}/>
                </TouchableOpacity>

            </View>
        </View>
    );
}