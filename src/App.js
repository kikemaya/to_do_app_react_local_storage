import React, { useState, useEffect } from 'react'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from './components/styles/Global'
import './components/styles/App.styled.css'

import Header from './components/Header'
import FormularioTareas from './components/FormularioTareas'
import ListaTareas from './components/ListaTareas'

function App() {
  const tareasGuardadas = localStorage.getItem("tareas") ? JSON.parse(localStorage.getItem("tareas")) : []

  let configMostrarCompletadas = ''

  if (!localStorage.getItem('mostrarCompletadas')) {
    configMostrarCompletadas = false
  } else {
    configMostrarCompletadas = (localStorage.getItem('mostrarCompletadas') === "true")
  }

  const [tareas, cambiarTareas] = useState(tareasGuardadas)

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas))
  }, [tareas])

  const [mostrarCompletadas, ocultarCompletadas] = useState(configMostrarCompletadas)

  useEffect(() => {
    localStorage.setItem("mostrarCompletadas", mostrarCompletadas.toString())
  }, [mostrarCompletadas])


  const theme = {
    colors: {
      primary: '#EBFBFF'
    },
    mobile: '768px',
  }

  return (
    <ThemeProvider
      theme={theme}
    >
      <GlobalStyles />
      <div className='contenedor'>
        <Header
          mostrarCompletadas={mostrarCompletadas}
          ocultarCompletadas={ocultarCompletadas}
        />
        <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas} />
        <ListaTareas
          tareas={tareas}
          cambiarTareas={cambiarTareas}
          mostrarCompletadas={mostrarCompletadas}
        />
      </div>
    </ThemeProvider>
  )
}

export default App