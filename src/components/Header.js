import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

function Header({ mostrarCompletadas, ocultarCompletadas }) {

  const toggleCompletadas = () => {
    ocultarCompletadas(!mostrarCompletadas)
  }

  return (
    <header className='header'>

      <h1 className='header__titulo'>Things to do</h1>
      {
        mostrarCompletadas
          ?
          <button
            className='header__boton'
            onClick={() => toggleCompletadas()}
          >
            Don't show completed
            <FontAwesomeIcon
              icon={faEyeSlash}
              className="header__icono-boton"
            />
          </button>
          :
          <button
            className='header__boton'
            onClick={() => toggleCompletadas()}
          >
            Show completed
            <FontAwesomeIcon
              icon={faEye}
              className="header__icono-boton"
            />
          </button>
      }

    </header>
  )
}

export default Header