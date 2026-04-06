# 📱 App de Cadastro de Pessoas

## 📖 Descrição do projeto

Este projeto consiste em um aplicativo mobile desenvolvido em React Native para cadastro e gerenciamento de pessoas.

O sistema permite:

* Listar pessoas cadastradas
* Buscar pessoas por diferentes campos (nome, sobrenome, email e telefone)
* Adicionar novas pessoas
* Editar dados existentes
* Remover registros

A aplicação consome uma API simulada utilizando JSON Server.

Vídeo de demonstração do aplicativo: https://youtu.be/dJSdRr3o63k

---

## 🚀 Tecnologias utilizadas

* React Native
* Expo
* JavaScript
* JSON Server (API fake)
* Fetch API
* Lucide React Native (ícones)

---

## ⚙️ Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/gabrielzianialves/crud-jsonserver.git
```

---

### 2. Instale as dependências do frontend

```bash
npm install
```

---

### 3. Instale o JSON Server (caso não tenha)

```bash
npm install -g json-server
```

---

## ▶️ Execução

### 1. Iniciar a API

Na pasta Backend:

```bash
json-server --watch database.json --port 3000
```

Ou, caso esteja utilizando tunnel (Cloudflare):

```bash
npm install -g cloudflared
```
```bash
cloudflared tunnel --url http://localhost:3000
```

---

### 2. Configurar a URL da API

No arquivo:

```bash
servers/configApi.js
```

Defina a URL da API:

```js
export const API_URL = "http://localhost:3000";
```

Ou (caso use tunnel):

```js
export const API_URL = "https://SEU-LINK.trycloudflare.com";
```

*Importante:*
O link gerado pelo tunnel é temporário e muda a cada vez que o serviço é reiniciado.
O link geralmente tem duração limitada (alguns minutos ou horas). Sempre que o tunnel for reiniciado, um novo link será gerado, é necessário atualizar a variável API_URL no arquivo configApi.js com o novo endereço.

---

### 3. Rodar o app

Na pasta Frontend:

```bash
npx expo start
```

Depois escolha:

* Android (emulador ou celular)
* iOS
* Web

---

## 💡 Explicação da solução

O problema foi resolvido através da construção de um CRUD completo integrado a uma API simulada.

### Busca de dados

A funcionalidade de pesquisa foi implementada utilizando:

* Captura do texto digitado com `useState`
* Filtragem local dos dados
* Atualização dinâmica da lista com `FlatList`

A busca permite filtrar por Nome, Sobrenome, Email ou Telefone.

---

### Controle de carregamento

Foi implementado um estado de loading para melhorar a experiência do usuário:

* Enquanto os dados são carregados, é ativado o `ActivityIndicator`
* Após o carregamento, a lista é exibida

---

### Tratamento de erros

O sistema trata falhas de conexão com a API a partir de:

* Exibição de mensagens de erro
* Uso de `Alert`

---

### Validação de dados

Antes de salvar um registro, os dados são validados:

* Telefone deve conter exatamente 11 dígitos e apenas números são aceitos
* Caso inválido, o app exibe um alerta e bloqueia o envio dos dados

---

### Interface

A interface foi construída com foco em:

* Simplicidade
* Organização em componentes
* Uso de ícones (Lucide)
* Feedback visual (loading e erros)
