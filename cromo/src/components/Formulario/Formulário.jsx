import React, { useState } from "react";
import axios from "axios";
import { Button, Form, Input, InputArea, Popup, Radio } from "./Style";

export default function Formulario() {
  const [state, setState] = useState({
    name: '',
    email: '',
    phone: '',
    mensagem: '',
    subscription: false,
    status: null
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    const newValue = name === 'subscription' ? checked : value;

    setState((prevState) => ({ ...prevState, [name]: newValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await axios.post('https://walrus-app-4twgg.ondigitalocean.app/send-email', state);
      setState((prevState) => ({ ...prevState, status: 'success' }));
      setStatusMessage("E-mail enviado com sucesso!");
    } catch (error) {
      console.log(error);
      setState((prevState) => ({ ...prevState, status: 'error' }));
      setError("Ocorreu um erro ao enviar o e-mail.");
    }
  };

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
        Nome:
      </label>
      <Input
        type="text"
        id="name"
        name="name"
        placeholder="Qual o seu nome"
        value={state.name}
        onChange={handleChange} 
      />
      <br />

      <label htmlFor="email" title="Digite seu e-mail">
        E-mail:
      </label>
      <Input
        type="email"
        id="email"
        name="email"
        placeholder="Digite seu e-mail"
        value={state.email}
        onChange={handleChange} 
      />
      <br />

      <label htmlFor="phone" title="Digite seu número de telefone com DDD">
        Telefone:
      </label>
      <Input
        type="tel"
        id="phone"
        name="phone"
        placeholder="Digite seu melhor telefone"
        value={state.phone}
        onChange={handleChange} 
      />
      <br />

      <label htmlFor="mensagem" title="Digite sua mensagem">
        Mensagem:
      </label>
      <InputArea
        id="mensagem"
        name="mensagem"
        placeholder="Quer deixar aqui uma mensagem?"
        value={state.mensagem}
        onChange={handleChange} 
      />

      <Radio>
        <label style={{ margin: '10px 0', fontWeight: 'bold' }}>
          <input type="checkbox" name="subscription" checked={state.subscription} onChange={handleChange} style={{ marginRight: '5px' }} />
          Quero receber conteúdo.
        </label>
      </Radio>

      <Button type="submit">
        Enviar
      </Button>
    </Form>
  );
}
