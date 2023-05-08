import React, { useState } from 'react';
import axios from 'axios';

const FormularioTeste = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    phone: '',
    mensagem: '',
    subscription: false,
    status: null
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    const newValue = name === 'subscription' ? checked : value;

    setState((prevState) => ({ ...prevState, [name]: newValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await axios.post('olamundotec.com:21039', state);
      setState((prevState) => ({ ...prevState, status: 'success' }));
    } catch (error) {
      console.log(error);
      setState((prevState) => ({ ...prevState, status: 'error' }));
    }
  };
  
  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <label style={{ margin: '10px 0', fontWeight: 'bold' }}>
        Name:
        <input type="text" name="name" value={state.name} onChange={handleChange} style={{ marginLeft: '10px', padding: '5px', borderRadius: '5px', border: '1px solid gray' }} />
      </label>
      <label style={{ margin: '10px 0', fontWeight: 'bold' }}>
        Email:
        <input type="email" name="email" value={state.email} onChange={handleChange} style={{ marginLeft: '10px', padding: '5px', borderRadius: '5px', border: '1px solid gray' }} />
      </label>
      <label style={{ margin: '10px 0', fontWeight: 'bold' }}>
        Phone:
        <input type="tel" name="phone" value={state.phone} onChange={handleChange} style={{ marginLeft: '10px', padding: '5px', borderRadius: '5px', border: '1px solid gray' }} />
      </label>
      <label style={{ margin: '10px 0', fontWeight: 'bold' }}>
        Message:
        <textarea name="mensagem" value={state.mensagem} onChange={handleChange} style={{ marginLeft: '10px', padding: '5px', borderRadius: '5px', border: '1px solid gray' }}></textarea>
      </label>
      <label style={{ margin: '10px 0', fontWeight: 'bold' }}>
        <input type="checkbox" name="subscription" checked={state.subscription} onChange={handleChange} style={{ marginRight: '5px' }} />
        Subscribe to our newsletter
      </label>
      <button type="submit" style={{ marginTop: '20px', padding: '10px', borderRadius: '5px', backgroundColor: 'lightblue', color: 'white', fontWeight: 'bold', border: 'none' }}>Send</button>
      {state.status === 'success' && <p style={{ marginTop: '20px', color: 'green', fontWeight: 'bold' }}>Message sent successfully!</p>}
      {state.status === 'error' && <p style={{ marginTop: '20px', color: 'red', fontWeight: 'bold' }}>Failed to send message.</p>}
</form>
);
};

export default FormularioTeste;
