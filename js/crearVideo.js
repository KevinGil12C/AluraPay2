import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function crear_video(evento){
    evento.preventDefault();
    const titulo = document.querySelector("[data-titulo]").value;
    const url = document.querySelector("[data-url]").value;
    const imagen = document.querySelector("[data-imagen]").value;
    const descripcion = Math.floor(Math.random*10).toString();

    try {
        conexionAPI.crear_video(titulo,descripcion,url,imagen);

    window.location.href="../pages/envio-concluido.html"
    } catch (error) {
        alert(error);
    }
}

formulario.addEventListener('submit', evento => crear_video(evento));