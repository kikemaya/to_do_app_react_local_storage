import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faCheckSquare, faEdit, faTimes } from '@fortawesome/free-solid-svg-icons'

function Tarea({ tarea, toggleCompletada, editarTarea, borrarTarea }) {
  const [tareaPorEditar, editandoTarea] = useState(false)

  const [nuevaTarea, cambiarNuevaTarea] = useState(tarea.texto)

  const handleSubmit = (e) => {
    e.preventDefault()
    editarTarea(tarea.id, nuevaTarea)
    editandoTarea(false)
  }

  return (
    <li className='lista-tareas__tarea'>
      <FontAwesomeIcon
        icon={(!tarea.completada) ? faSquare : faCheckSquare}
        className='lista-tareas__icono lista-tareas__icono-check'
        onClick={() => toggleCompletada(tarea.id)}
      />
      <div className='lista-tareas__texto'>
        {
          (tareaPorEditar)
            ?
            <form action='' className='formulario-editar-tarea' onSubmit={(e) => handleSubmit(e)}>
              <input type='text'
                className='formulario-editar-tarea__input'
                value={nuevaTarea}
                onChange={(e) => cambiarNuevaTarea(e.target.value)}
              />
              <button
                type='submit'
                className='formulario-editar-tarea__btn'
              >
                Update
              </button>
            </form>
            :
            tarea.texto
        }
      </div>
      <div className='lista-tareas__contenedor-botones'>
        <FontAwesomeIcon
          icon={faEdit}
          className='lista-tareas__icono lista-tareas__icono-accion'
          onClick={() => editandoTarea(!tareaPorEditar)}
        />
        <FontAwesomeIcon
          icon={faTimes}
          className='lista-tareas__icono lista-tareas__icono-accion'
          onClick={() => borrarTarea(tarea.id)}
        />
      </div>
    </li>
  )
}

export default Tarea