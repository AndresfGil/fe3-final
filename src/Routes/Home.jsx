import React from 'react'
import { useContextGlobal } from '../Components/utils/global.context'
import Card from '../Components/Card'

const Home = () => {
  const { state } = useContextGlobal()

  return (
    <div className={`home ${state.theme ? 'home-light' : 'home-dark'}`}>
      {state?.data.map((item) => (
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

export default Home
