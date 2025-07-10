import { useState } from "react";
import "../styles/Contato.css";

export default function Contato() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("contato", JSON.stringify(form));
    alert("Mensagem enviada com sucesso!");
    setForm({ nome: "", email: "", mensagem: "" }); // Limpa o formulário
  };

  return (
    <form onSubmit={handleSubmit} className="form-contato">
      <h1>Fale Conosco</h1>

      <label htmlFor="nome">Nome</label>
      <input
        id="nome"
        name="nome"
        placeholder="Seu nome"
        value={form.nome}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        placeholder="Seu email"
        value={form.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="mensagem">Mensagem</label>
      <textarea
        id="mensagem"
        name="mensagem"
        placeholder="Escreva sua mensagem"
        value={form.mensagem}
        onChange={handleChange}
        required
      />

      <button type="submit">Enviar</button>
    </form>
  );
}
