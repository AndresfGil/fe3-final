import React, { useState } from 'react'
import Message from './Message'
import { useContextGlobal } from './utils/global.context'

const Form = () => {
  const { state } = useContextGlobal()

  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    number: ''
  })

  const errorMessage = 'Por favor verifique su información nuevamente'
  const successMessage = `Gracias ${customer.name}, te contactaremos cuando antes vía mail`

  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const handleChangeName = (event) => {
    setCustomer({ ...customer, name: event.target.value })
  }

  const handleChangeEmail = (event) => {
    setCustomer({ ...customer, email: event.target.value })
  }

  const handleChangeNumber = (event) => {
    setCustomer({ ...customer, number: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    let hasError = false

    if (customer.name.length < 5 || customer.name.startsWith(' ')) {
      hasError = true
    }

    const emailPattern = new RegExp('^(.+)@(\\S+)$')
    if (!emailPattern.test(customer.email)) {
      hasError = true
    }

    const numberPattern = /^[0-9]+$/
    if (!numberPattern.test(customer.number)) {
      hasError = true
    }

    if (hasError) {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 3000)
    } else {
      setShow(true)
      console.log('User', customer)
    }
  }

  const handleReset = () => {
    setCustomer({
      name: '',
      email: '',
      number: ''
    })
    setShow(false)
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={`containerForm ${
          state.theme ? 'containerForm-light' : 'containerForm-dark'
        }`}
      >
        <label>Nombre completo: </label>
        <input type="text" value={customer.name} onChange={handleChangeName} />
        <label>Correo electronico: </label>
        <input
          type="text"
          value={customer.email}
          onChange={handleChangeEmail}
        />
        <label>Numero de contacto: </label>
        <input
          type="text"
          value={customer.number}
          onChange={handleChangeNumber}
        />
        <button>Enviar</button>
        <hr />
        <button type="button" onClick={handleReset}>
          Reiniciar
        </button>
      </form>
      <div>
        {error ? (
          <Message message={errorMessage} color="red" />
        ) : show ? (
          <Message message={successMessage} color="green" />
        ) : null}
      </div>
    </>
  )
}

export default Form
