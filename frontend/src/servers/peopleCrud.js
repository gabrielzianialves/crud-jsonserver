import { API_URL } from "./configApi";

//buscar pessoas
export async function getPeople() {

    const response = await fetch(`${API_URL}/people`);
    const data = await response.json();
    return data;
    
}

//criar pessoa
export async function createPerson(person) {

    const response = await fetch(`${API_URL}/people`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(person)
    });

    return response.json();
}

//atualizar pessoa
export async function updatePerson(id, person) {

    const response = await fetch(`${API_URL}/people/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(person)
    });

    return response.json();
}

//deletar pessoa
export async function deletePerson(id) {

    await fetch(`${API_URL}/people/${id}`, {
        method: "DELETE"
    });
}