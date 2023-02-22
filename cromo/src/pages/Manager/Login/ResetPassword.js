import React, { useState } from 'react';


export default function ResetPassword() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // adicione aqui o código para enviar o email para a API de redefinição de senha
    setSuccess(true);
  };

  if (success) {
    return <div>Um email com instruções para redefinir sua senha foi enviado para {email}.</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <button type="submit">Redefinir senha</button>
    </form>
  );
}

 
