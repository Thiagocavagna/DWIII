"use client"

import { useState } from "react";

export default function Button() {

    const [ligado, setLigado] = useState(false);

    const martkLigado = () => {
        setLigado(x => !x);
    }

    return (
        <>
        {
            ligado ? <button className="btn btn-success" onClick={ martkLigado} >Ligado</button>
            : <button className="btn btn-danger" onClick={ martkLigado} >Desligado</button>
        }
        </>
    )
}