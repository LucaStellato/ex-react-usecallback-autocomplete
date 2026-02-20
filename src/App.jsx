import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import debounce from 'lodash.debounce'




function App() {
  const [data, setData] = useState([])
  const [query, setQuery] = useState('')

  const eseguiFetch = useCallback(debounce((query) => {
    if (query.trim() == '') {
      setData([])
      return
    }
    axios.get(`http://localhost:3333/products?search=${query}`)
      .then((response) => {
        setData(response.data)

      })
  }, 300), [])

  useEffect(() => {

    eseguiFetch(query)

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
