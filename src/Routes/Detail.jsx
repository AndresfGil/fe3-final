import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/global.context'

const Detail = () => {
  const { state } = useContextGlobal()
  const { id } = useParams()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true)
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        )
        if (!response.ok) {
          throw new Error('Error al obtener los datos del usuario')
        }
        const data = await response.json()
        console.log('data', data)
        setUser(data)
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [id])

  if (loading) {
    return <p>Cargando...</p>
  }

  return (
    <div
      className={`details ${state.theme ? 'details-light' : 'details-dark'}`}
    >
      <div className="card-image-detail">
        <img
          src="https://img.icons8.com/?size=100&id=DHJCUP779OXh&format=png&color=000000"
          alt="Doc Img"
        />
      </div>
      <h1>Detalles del Dentista {id}</h1>
      <p>
        <strong>Nombre:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Teléfono:</strong> {user.phone}
      </p>
      <p>
        <strong>Sitio Web:</strong> {user.website}
      </p>
    </div>
  )
}

export default Detail
