import { useState, useEffect } from 'react'
import { client } from '../client'

const useClient = doc => {
  const [document, setDocument] = useState([])

  useEffect(() => {
    const query = `*[_type == "${doc}"]`
    client.fetch(query).then(data => setDocument(data))
  }, [])

  return document
}

export default useClient
