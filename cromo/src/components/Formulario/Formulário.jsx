import React, { useState } from "react";
import axios from "axios";
import { Button, Form, Input, InputArea, Popup, Radio } from "./Style";

export default function Formulario() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [subscription, setSubscription] = useState(true);
  const [statusMessage, setStatusMessage] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await axios.post("https://walrus-app-4twgg.ondigitalocean.app/", {
        name,
        email,
        phone,
        mensagem,
        subscription,
      });
      setStatusMessage("E-mail enviado com sucesso!");
      setError("");
    } catch (error) {
      console.log("Error sending email:", error);
      setError("Houve um erro ao enviar o seu fomulário, tente novamente mais tarde.");
      setStatusMessage("");
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
    {statusMessage && (
  <Popup className="show">
    <p>SUCESSO!</p>
    {statusMessage}
    <button onClick={() => {setStatusMessage(""); setError("");}}>
      Fechar
    </button>
  </Popup>
)}
{error && (
  <Popup className="show">
    <p>X</p>
    {error}
    <button onClick={() => {setStatusMessage(""); setError("");}}>
      Fechar
    </button>
  </Popup>
)}

      <label htmlFor="name" title="Digite seu nome completo">
      </label>
      <Input
        type="text"
        id="name"
        name="name"
        placeholder=" Qual o seu nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label htmlFor="email" title="Digite seu e-mail">
        
      </label>
      <Input
        type="email"
        id="email"
        name="email"
        placeholder="   Digite seu e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />

      <label htmlFor="phone" title="Digite seu número de telefone com DDD">
        
      </label>
      <Input
        type="tel"
        id="phone"
        name="phone"
        placeholder="   Digite seu melhor telefone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <br />
      <InputArea
        type="textarea"
        id="mensagem"
        name="mensagem"
        placeholder="  Quer deixar aqui uma mensagem?"
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
      />

<Radio>
  <input
    type="radio"
    id="content"
    name="subscription"
    value="yes"
    checked={subscription}
    onChange={(e) => setSubscription(e.target.value === 'yes')}
  />
  <label htmlFor="content">Quero receber conteúdos</label>
  <span className="checkmark"></span>
</Radio>

      <Button type="submit" value="Enviar">
        Enviar
      </Button>
    </Form>
  );
}
