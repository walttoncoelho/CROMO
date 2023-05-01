import React, { useState } from "react";
import { Button, Form, Input, Radio } from "./Style";

function Formulario() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subscription, setSubscription] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    console.log({
      name,
      email,
      phone,
      subscription,
    });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="name" title=" Digite seu nome completo">
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

      <label htmlFor="email" title=" Digite seu e-mail">

      </label>
      <Input
        type="email"
        id="email"
        name="email"
        placeholder=" Digite seu e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />

      <label htmlFor="phone" title=" Digite seu número de telefone com DDD">

      </label>
      <Input
        type="tel"
        id="phone"
        name="phone"
        placeholder="Digite seu melhor telefone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <br />

      <Radio>
        <input
          type="radio"
          id="content"
          name="subscription"
          value="yes"
          checked={subscription}
          onChange={(e) => setSubscription(true)}
        />
        <label htmlFor="content"> Quero receber conteúdos</label>
        <br />
      </Radio>
      <Button type="submit" value="Enviar">
        Enviar
      </Button>
    </Form>

  );
}

export default Formulario;
