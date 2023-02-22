import React, { useState } from 'react';
import { PopupForm } from './Style';


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
    <div style={{ 
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)',
      zIndex: '998',
      }}>
<PopupForm onSubmit={handleSubmit} >
  <div>
    <h3>
      Redefina a sua senha
    </h3>
    <p>
      Digite o email cadastrado para redefinir a senha.
    </p>
      <label >
        Email:        
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <button type="submit">Redefinir senha</button>    
  </div>
</PopupForm>

    </div>
  );
}

 
