import React, { useState } from 'react';
import Contenido from './Contenido';

export default () => {
    const [lista, setLista] = useState([
        { id: 1, mensaje: "Agregue Tarea" }
    ])
    const [input, setInput] = useState("")


    const recarga = (e, lista, setLista, input, setInput) => {
        e.preventDefault()
        const id = (lista.length) ? lista[lista.length - 1].id + 1 : 0
    
        setLista([...lista, {id: id, mensaje: input}])
        setInput("")
    }
    
    const deleteMensaje = (id, lista, setLista) => {
        setLista(lista.filter(Contenid => Contenid.id !== id))
    }

    return (
        <>
            <div className='Lista'>
                <form className='form' onSubmit={(e) => recarga(e, lista, setLista, input, setInput)} >
                    <input className='input' type='Text' placeholder="Escribe Aqui..." 
                    onChange={(e) => setInput(e.target.value)} value = {input} />
                </form>
                {lista.map(Contenid => (
                <Contenido mensaje={Contenid.mensaje}
                 id={Contenid.id} deleteMensaje={(id) => deleteMensaje(id, lista, setLista)}/>
                 ))}
            </div>
        </>
    );
}