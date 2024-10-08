"use client"

import { useState } from "react";

export default function AuthPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);  
  const [isRegistering, setIsRegistering] = useState(true);  
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: ""
  });
  const [loginData, setLoginData] = useState({
    email: "",
    senha: ""
  });
  const [error, setError] = useState("");

  const handleRegisterChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const { nome, email, senha, confirmarSenha } = formData;

    if (!nome || !email || !senha || !confirmarSenha) {
      setError("Todos os campos são obrigatórios!");
      return;
    }
    
    if (senha !== confirmarSenha) {
      setError("As senhas não coincidem!");
      return;
    }

    setError("");
    setIsRegistering(false);  
  };

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const { email, senha } = loginData;

    if (!email || !senha) {
      setError("Por favor, insira suas credenciais.");
      return;
    }

    if (email === formData.email && senha === formData.senha) {
      setIsLoggedIn(true);  
      setError("");
    } else {
      setError("Credenciais inválidas!");
    }
  };

  if (isLoggedIn) {
    return <h2>Bem-vindo(a), {formData.nome}! Você está logado.</h2>;
  }

  return (
    <div>
      {isRegistering ? (
        <form onSubmit={handleRegisterSubmit}>
          <h2>Cadastro de Novo Usuário</h2>
          <div>
            <label>Nome Completo</label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleRegisterChange}
              required
            />
          </div>
          <div>
            <label>E-mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleRegisterChange}
              required
            />
          </div>
          <div>
            <label>Senha</label>
            <input
              type="password"
              name="senha"
              value={formData.senha}
              onChange={handleRegisterChange}
              required
            />
          </div>
          <div>
            <label>Confirmar Senha</label>
            <input
              type="password"
              name="confirmarSenha"
              value={formData.confirmarSenha}
              onChange={handleRegisterChange}
              required
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit">Cadastrar</button>
        </form>
      ) : (
        <form onSubmit={handleLoginSubmit}>
          <h2>Login</h2>
          <div>
            <label>E-mail</label>
            <input
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleLoginChange}
              required
            />
          </div>
          <div>
            <label>Senha</label>
            <input
              type="password"
              name="senha"
              value={loginData.senha}
              onChange={handleLoginChange}
              required
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit">Entrar</button>
        </form>
      )}
    </div>
  );
}
