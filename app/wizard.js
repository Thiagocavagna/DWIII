"use client"

import { useState } from "react";

export default function CadastroWizard() {
  const [step, setStep] = useState(1);  
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    dataNascimento: "",
  });
  const [cadastros, setCadastros] = useState([]); 
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (step === 1 && !formData.nome) {
      setError("O nome é obrigatório.");
      return;
    }
    if (step === 2 && !formData.email) {
      setError("O e-mail é obrigatório.");
      return;
    }
    if (step === 3 && !formData.dataNascimento) {
      setError("A data de nascimento é obrigatória.");
      return;
    }
    setError("");
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSave = () => {
    setCadastros([...cadastros, formData]);
    setFormData({
      nome: "",
      email: "",
      dataNascimento: "",
    });
    setStep(1);
  };

  return (
    <div>
      <h2>Cadastro Wizard</h2>

      {step === 1 && (
        <div>
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>
      )}

      {step === 2 && (
        <div>
          <label>E-mail:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      )}

      {step === 3 && (
        <div>
          <label>Data de Nascimento:</label>
          <input
            type="date"
            name="dataNascimento"
            value={formData.dataNascimento}
            onChange={handleChange}
            required
          />
        </div>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div>
        {step > 1 && <button onClick={handleBack}>Voltar</button>}
        {step < 3 && <button onClick={handleNext}>Próximo</button>}
        {step === 3 && <button onClick={handleSave}>Salvar</button>}
      </div>

      {cadastros.length > 0 && (
        <div>
          <h3>Lista de Cadastros:</h3>
          <ul>
            {cadastros.map((cadastro, index) => (
              <li key={index}>
                {cadastro.nome} - {cadastro.email} - {cadastro.dataNascimento}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
