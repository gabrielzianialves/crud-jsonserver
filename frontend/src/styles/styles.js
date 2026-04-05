import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container:{
        flex: 1,
        padding: 20,
        backgroundColor: "#EEE8DF"
    },

    title:{
        fontSize: 22,
        textAlign:"center",
        marginBottom: 20,
        marginTop: 30,
        fontWeight: "bold",
        color: "#171940"
    },

    card:{
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        padding: 20,
        marginBottom: 15,
        borderRadius: 20
    },

    name:{
        fontSize: 20,
        fontWeight: "bold",
        color: "#171940"
    },

    email:{
        fontSize: 10
    },

    phone:{
        fontSize: 10
    },

    button:{
        padding: 10,
        marginBottom: 10,
        backgroundColor: "#171940",
        borderRadius: 15,
        height: 40,
        marginRight: 80,
        marginLeft: 80
    },
    buttonText:{
        color: "white",
        textAlign: "center",
        fontWeight: "bold"
    },
    input: {
        borderWidth: 1,
        borderRadius: 15,
        padding: 10,
        marginBottom: 20,
        backgroundColor: "#f5f5f5"
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 2,
        borderRadius: 15,
        paddingHorizontal: 10,
        marginBottom: 20,
        marginTop: 10,
        backgroundColor: "#f5f5f5",
        borderColor: "#171940"
    },
    searchInput: {
        flex: 1,
        padding: 10,
        borderWidth: 0,
        outlineStyle: "none"
    },
    editRemoveButton:{
        padding: 10,
        backgroundColor: "#2C365A",
        borderRadius: 10,
        marginBottom: 5
    }
})