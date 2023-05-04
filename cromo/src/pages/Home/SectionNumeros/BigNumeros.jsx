import React from 'react'

import data from "../../../components/Numeros/data/data";

export default function BigNumeros() {
return (
<>
        {data.map((item) => (
            <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.descricao}</p>
            </div>
        ))}    
</>
)
}
