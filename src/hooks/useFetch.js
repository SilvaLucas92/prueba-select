import React, { useState, useEffect } from 'react'
import axios from 'axios'

const useFetch = (url) => {
    const [ data, setData ] = useState(null)
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ]  =  useState(null)
    
    useEffect(() => {
        setLoading(true)
        axios
            .get(url)
            .then((response) => {
                setData(response.data.results)
                setLoading(false)
            })
            .catch((err) => {
                setError(err)
            })
    }, [url])
    return { data, loading, error }
}

export default useFetch