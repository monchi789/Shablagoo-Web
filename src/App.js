import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { app } from "./fb";
// import * as GeoFire from "geofire";

function App() {
  // URl file
  const [archivoUrl, setArchivoUrl] = React.useState("");

  const archivoHandler = async (e) => {
    const archivo = e.target.files[0];
    const storageRef = app.storage().ref();
    const archivoPath = storageRef.child(archivo.name);
    await archivoPath.put(archivo);

    // Debug the file upload
    console.log("Archivo Cargado: ", archivo.name);

    const enlaceUrl = await archivoPath.getDownloadURL();
    setArchivoUrl(enlaceUrl);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    // Input data to firebase
    const nombreEvento = e.target.evento.value;
    const precio = e.target.precio.value;
    const nombreLocal = e.target.local.value;
    const fechaEvento = e.target.fecha.value;

    const coleccionRef = app.firestore().collection("events");

    const docu = await coleccionRef
      .doc(nombreEvento, precio, nombreLocal, fechaEvento)
      .set({
        titulo: nombreEvento,
        precio: precio,
        local: nombreLocal,
        fecha: fechaEvento,
        url: archivoUrl,
      });
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input type="file" onChange={archivoHandler} />
        <input type="text" name="evento" placeholder="Nombre del evento" />
        <input type="text" name="precio" placeholder="Ingrese el precio" />
        <input
          type="text"
          name="local"
          placeholder="Ingrese nombre del local"
        />
        <input type="datetime-local" name="fecha" />
        <button>Enviar</button>
      </form>
    </>
  );
}

export default App;
