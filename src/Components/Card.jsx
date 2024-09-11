import React from 'react'
import { useContextGlobal } from './utils/global.context'
import { Link } from 'react-router-dom'

const Card = ({ name, username, id }) => {
  const { state, dispatch } = useContextGlobal()

  const addFav = (id) => {
    dispatch({ type: 'FAV_ACTION', payload: id })
  }

  return (
    <div className={`card ${state.theme ? 'card-light' : 'card-dark'}`}>
      <div className="card-image">
        <Link to={`/dentista/${id}`}>
          <img
            src="https://img.icons8.com/?size=100&id=DHJCUP779OXh&format=png&color=000000"
            alt="Doc Img"
          />
        </Link>
      </div>
      <div className="card-info">
        <p>{name}</p>
        <p>{username}</p>
      </div>

      {state.favs.includes(id) ? (
        <img
          onClick={() => addFav(id)}
          width="30"
          height="30"
          src="https://img.icons8.com/fluency/30/star--v1.png"
          alt="favorite"
          style={{ cursor: 'pointer' }}
        />
      ) : (
        <img
          onClick={() => addFav(id)}
          width="30"
          height="30"
          src="https://img.icons8.com/color/48/star--v1.png"
          alt="add to favorite"
          style={{ cursor: 'pointer' }}
        />
      )}
    </div>
  )
}

export default Card
