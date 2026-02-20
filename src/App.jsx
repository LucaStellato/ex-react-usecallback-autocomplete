import { useState, useEffect } from 'react'
import axios from 'axios'


function App() {
  const [data, setData] = useState([])
  const [query, setQuery] = useState('')
  useEffect(() => {
    if (query.trim() == '') {
      setData([])
      return
    }
    axios.get(`http://localhost:3333/products?search=${query}`)
      .then((response) => {
        setData(response.data)

      })
  }, [query])
  console.log(data)


  return (
    <>
      <input
        type='text'
        value={query}
        onChange={(e) => setQuery(e.target.value)} />




      {data.length > 0 && (
        <div>
          {data.map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      )}





    </>
  )
}

export default App
