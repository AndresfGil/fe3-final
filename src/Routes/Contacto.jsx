import React from 'react'
import Form from '../Components/Form'
import { useContextGlobal } from '../Components/utils/global.context'

const Contacto = () => {
  const { state } = useContextGlobal()
  return (
    <div
      className={`contact ${state.theme ? 'contact-light' : 'contact-dark'}`}
    >
      <h1>REGISTRA TU INFORMACION</h1>
      <Form />
    </div>
  )
}

export default Contacto
