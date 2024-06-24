import axios from "axios";
import React, { createContext, useState } from "react";

export const VideoContext = createContext({});

export default function VideoProvider({ children }) {

    //Minha URL do Vercel
    const url = "https://backendmobile.vercel.app/videos/";

    function buscarVideos() {
        axios.get(url)
            .then((response) => { console.log(response.data); setVideos(response.data) })
            .catch((erro) => console.warn(erro))
        //console.log("passou no getVideos", videos);
    }

    function gravarDados() {
        console.log("gravar dados", url + id)

        if (id) {
            axios.put(url + id, {
                name: name,
                description: description,
                thumbnail, thumbnail,
            }).then((resp) => atualizaListaVideosEditado(resp)).catch((erro) => console.log(erro));
        }
    }

    function atualizaListaVideosEditado(response) {

        let id = response.data.identificador;
        const { name, description, thumbnail } = JSON.parse(response.config.data);
        const index = videos.findIndex(item => item.id == id);

        let auxVideos = videos;

        auxVideos[index].name = name;
        auxVideos[index].description = description;
        auxVideos[index].thumbnail = thumbnail;
        setVideos(auxVideos);

        let video = {};
        video.id = id;
        video.name = name;
        video.description = description;
        video.thumbnail = thumbnail;
        setAtualizacao(video);

    }

    //Dados da Tabela
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [thumbnail, setThumbnail] = useState("");

    //Tabela
    const [videos, setVideos] = useState([]);
    const [atualizacao, setAtualizacao] = useState([]);

    return (
        <VideoContext.Provider value={{ id, name, description, thumbnail, videos, atualizacao, setId, setName, setDescription, setThumbnail, setVideos, setAtualizacao, buscarVideos, gravarDados }}>
            {children}
        </VideoContext.Provider>
    )
}