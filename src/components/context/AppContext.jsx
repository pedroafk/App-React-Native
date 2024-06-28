import axios from "axios";
import React, { createContext, useState } from "react";

export const UsersappContext = createContext({});

export default function UsersappProvider({ children }) {

    //Minha URL do Vercel
    const url = "https://backendmobile.vercel.app/usersapp/";

    function buscarUsersapp() {
        fetch(url)
            .then((respFetch) => respFetch.json())
            .then((respJson) => setUsersapp(respJson))
            .catch((erro) => console.warn(erro))
        console.log("passou no getUsersapp", usersapp);
    }

    function gravarDados() {
        console.log("gravar dados", url + id)
        if (id) {
            axios.put(url + id, {
                username: username,
                nome: nome,
                status: (status ? status : null),
            }).then((resp) => atualizaListaUsersappEditado(resp)).catch((erro) => console.log(erro));
        } else {
            axios.post(url, {
                username: username,
                nome: nome,
                status: (status ? status : null),
            }).then((resp) => atualizaListaUsersappNovo(resp)).catch((erro) => console.log(erro));
        }
    }

    function atualizaListaUsersappEditado(response) {

        let id = response.data.identificador;
        const { username, nome, status } = JSON.parse(response.config.data);
        const index = usersapp.findIndex(item => item.id == id);

        let users = usersapp;

        users[index].username = username;
        users[index].nome = nome;
        users[index].status = (status ? status : "");
        setUsersapp(users);

        let usuario = {};
        usuario.id = id;
        usuario.username = username;
        usuario.nome = nome;
        usuario.status = status;
        setAtualizacao(usuario);

    }

    function atualizaListaUsersappNovo(response) {
        console.log("atualizaListaUsersappNovo", response.data);

        let { id, username, nome, status } = response.data;
        let obj = { "id": id, "username": username, "nome": nome, "status": status };
        let users = usersapp;
        users.push(obj);

        setUsersapp(users);
        setAtualizacao(obj);
    }

    function apagarUsersapp(cod) {
        axios.delete(url + cod)
            .then(() => {
                setUsersapp(usersapp.filter(item => item.id !== cod));
            })
            .catch((erro) => console.log(erro))
    }

    const [id, setId] = useState("");
    const [username, setUsername] = useState("");
    const [nome, setNome] = useState("");
    const [status, setStatus] = useState("");
    const [usersapp, setUsersapp] = useState([]);
    const [atualizacao, setAtualizacao] = useState([]);

    return (
        <UsersappContext.Provider value={{ id, username, nome, status, usersapp, atualizacao, setId, setUsername, setNome, setStatus, setUsersapp, setAtualizacao, gravarDados, buscarUsersapp, apagarUsersapp }} >
            {children}
        </UsersappContext.Provider>
    )
}