"use client"

import { useState } from "react";

export default function Language() {

    const [ruby, setRuby] = useState(0);
    const [pascal, setPascal] = useState(0);

    const markRuby = () => {
        setRuby(x => x + 1);
    }

    const markPascal = () => {
        setPascal(x => x + 1);
    }

    return (
        <>
        <p>Escolha a linguagem favorita</p>
        <button onClick={markRuby} className="btn btn-success">Ruby</button>
        { ruby }

        <button onClick={markPascal} className="btn btn-danger">Pascal</button>
        { pascal }
        </>
    )
}