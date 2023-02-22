import React, { useState } from 'react';
import ResetPassword from './ResetPassword';
import { Form } from './Style';

export default function Login() {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [password, setPassword] = useState('');
  const [showResetPassword, setShowResetPassword] = useState(false);
   

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();  
 
    const { formIsValid, errors } = validateForm();
    setErrors(errors);
  
    if (formIsValid) {
      console.log(`Email: ${email} Password: ${password}`);
      // adicione aqui o código para enviar o email e a senha para a API de login
    } else {
      console.log(errors);
    }
  };

  const handleResetPasswordClick = (event) => {
    event.preventDefault();
    setShowResetPassword(true);
  };

  if (showResetPassword) {
    return <ResetPassword />;
  }
;



  function validateForm() {
    let errors = {};
    let formIsValid = true;
  
    // Validar o campo email
    if (!email) {
      formIsValid = false;
      errors["email"] = "Por favor, insira seu email.";
    }
  
    if (typeof email !== "undefined") {
      // expressão regular para validar o email
      let lastAtPos = email.lastIndexOf('@');
      let lastDotPos = email.lastIndexOf('.');
  
      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') == -1 && lastDotPos > 2 && (email.length - lastDotPos) > 2)) {
        formIsValid = false;
        errors["email"] = "Por favor, insira um email válido.";
      }
    }
  
    // Validar o campo senha
    if (!password) {
      formIsValid = false;
      errors["password"] = "Por favor, insira sua senha.";
    }
  
    if (typeof password !== "undefined") {
      if (password.length < 6) {
        formIsValid = false;
        errors["password"] = "A senha deve ter pelo menos 6 caracteres.";
      }
    }
  
    return { formIsValid, errors };
  }
  

  return (
    <Form onSubmit={handleSubmit}>
   
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
        {errors.email && <span>{errors.email}</span>}
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
        {errors.password && <span>{errors.password}</span>}
      </label>
     
      <div>
        <a href="##" onClick={handleResetPasswordClick}>Esqueceu sua senha?</a>
      </div>
      <button type="submit">Login</button>
    
    </Form>
  );
}


