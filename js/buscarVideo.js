import { conexionAPI } from "./conexionAPI.js";
import crearCard from "./mostrarVideos.js";

async function buscarVideo(evento){
    evento.preventDefault();
    const datosDeBusqueda=document.querySelector("[data-busqueda]").value;
    const busqueda= await conexionAPI.buscarVideo(datosDeBusqueda);

    const listaDeBusqueda=document.querySelector("[data-lista]");

    /* while(listaDeBusqueda.firstChild){
        console.log(listaDeBusqueda.firstChild)
        listaDeBusqueda.removeChild(listaDeBusqueda.firstChild)
    } */
    listaDeBusqueda.replaceChildren();

    busqueda.forEach(elemento => listaDeBusqueda.
        appendChild(crearCard(elemento.titulo,elemento.descripcion,elemento.url,elemento.imagen)));

     if(busqueda.length==0){
        listaDeBusqueda.innerHTML=`<h2 class="mensaje__titulo">No encontramos videos para ese filtro ${datosDeBusqueda}</h2>`;
    } 
}

const botonBusqueda=document.querySelector("[data-boton-busqueda]");

botonBusqueda.addEventListener("click",evento=>buscarVideo(evento));

const inputEle = document.getElementById('buscar');
inputEle.addEventListener('keyup', function(e){
  var key = e.which || e.keyCode;
  if (key == 13) { 
    buscarVideo(e)
  }
});