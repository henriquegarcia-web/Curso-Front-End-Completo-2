import React, { useEffect, useState } from 'react'

import axios from 'axios'

const Axios = () => {

  const [nomes, setNomes] = useState([{}])

  const Api = {
    getPersons: async function(){
      let res =  await axios.get(`https://jsonplaceholder.typicode.com/users`)
      let {data} = await res

      return data
    }
  }

  async function initApi(){
    let pegaNomes = await Api.getPersons();
    setNomes(pegaNomes)
    console.log(pegaNomes)
  }

  useEffect(() => {
    initApi()
  }, [])
  
  return (
    <div>
      {nomes.map((data) => (
        <div key={data.id}>
          <h2>{data.name}</h2>
        </div>
      ))}
    </div>
  )
}

export default Axios