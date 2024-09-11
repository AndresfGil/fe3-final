import React from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'

const Favs = () => {
  const { state } = useContextGlobal()

  const filteredData = state.data.filter((item) => state.favs.includes(item.id))

  return (
    <div className={`home ${state.theme ? 'home-light' : 'home-dark'}`}>
      {filteredData.map((item) => (
        <Card
          key={item.id}
          name={item.name}
          username={item.username}
          id={item.id}
        />
      ))}
    </div>
  )
}

export default Favs
