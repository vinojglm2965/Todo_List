import React from 'react'

export default ({ mensaje, id, deleteMensaje }) => (
    <>
        <div className='contenido'>
            <div className='row'>
                <p className='textlist col-11'>
                   {id} {mensaje} 
                </p>
                <p className='button col-1' onClick={(e) => deleteMensaje(id)}> X </p>
            </div>
        </div>
    </>
)