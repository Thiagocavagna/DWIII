"use client"

import { useState } from "react";
import ExibirNome from "./exibirNome";

export default function Form() {

const [mostrarNome, setMostrarNome] = useState(false);
const [nome, setNome] = useState('');	
    const handleChange = (e) => {
        setMostrarNome(false);
        setNome(e.target.value);
    }   

    const handleSubmit = (e) => {
        e.preventDefault();
        setMostrarNome(true);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Digite seu nome" required onChange={handleChange} />
                <button type="submit" className="btn btn-success">Enviar</button>
            </form>

            {mostrarNome && <ExibirNome nome={nome}></ExibirNome>}
        </>
    )
}