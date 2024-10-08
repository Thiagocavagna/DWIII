"use client"

import { useState } from "react";


export default function PodeVotar() {

    const [formData, setFormData] = useState({
        nome: '',
        idade: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(formData.idade);
        if (formData.idade >= 16) {
            alert('Você pode votar!');
        } else {
            alert('Você não pode votar!');
        }
    }
    
    const handleInput = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    return(           
        <>
        <form onSubmit={handleSubmit}>
            <input placeholder="Digite o seu nome" name="nome" onChange={handleInput}></input>
            <input placeholder="Digite a sua idade" name="idade" onChange={handleInput}></input>
            <button type="submit" className="btn btn-success">Enviar</button>
        </form>
        </>
    )
}