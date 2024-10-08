"use client"

import { useState } from "react";

export default function Imc() {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        var imc = calculateImc(formData.peso, formData.altura);

        if(imc < 18.5) {
            alert('Abaixo do peso');
        } else if(imc >= 18.5 && imc <= 24.9) {
            alert('Peso normal');
        } else if(imc >= 25 && imc <= 29.9) {
            alert('Sobrepeso');
        } else if(imc >= 30) {
            alert('Obesidade grau 1');
        }
    }

    const handleClean = (e) => {
        e.preventDefault(); 
        setFormData({
            peso: '',
            altura: ''
        });
    }

    const calculateImc = (peso, altura) => {
        return peso / (altura * altura);
    }

    const [formData, setFormData] = useState({
        peso: '',
        altura: ''
    });    

    const handleInput = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }
    return (
        <>
        <form onSubmit={handleSubmit}>

            <input required type="number" step={0.01} placeholder="Digite o seu peso" name="peso" onChange={handleInput}></input>
            <input type="number" step={0.01} placeholder="Digite a sua altura" name="altura" onChange={handleInput}></input>
            <button type="submit"  className="btn btn-success">Enviar</button>
            <button className="btn btn-danger" onClick={handleClean}>Limpar</button>
        </form>
        </>
    )
}