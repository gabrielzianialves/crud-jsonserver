import { API_URL } from "./configApi";

//buscar pessoas
async function assertJsonResponse(response) {
    const text = await response.text();

    if (!response.ok) {
        throw new Error(`API error ${response.status}: ${text}`);
    }
    try {
        return JSON.parse(text);
    } 
    catch (err) {
        throw new Error(`JSON parse error from API (${response.url}): ${err.message} / body: ${text}`);
    }
}

export async function getPeople() {

    const response = await fetch(`${API_URL}/people`);
    return assertJsonResponse(response);
    
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

    return assertJsonResponse(response);
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

    return assertJsonResponse(response);
}

//deletar pessoa
export async function deletePerson(id) {

    await fetch(`${API_URL}/people/${id}`, {
        method: "DELETE"
    });
}