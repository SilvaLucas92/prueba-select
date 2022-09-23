import React, { useState } from 'react'
import useFetch from '../../hooks/useFetch'
import Select from 'react-select'
const SelectCharacter = () => {

  const { data, loading } = useFetch("https://rickandmortyapi.com/api/character?page=1")
  const [ oneCharacter, setOneCharacter ] = useState(null)

  const selectCharacter = (character) => {
    setOneCharacter(character)
  }
  console.log(oneCharacter)
  // console.log(data)
  if(loading) {
    return (
      <h2>Loading...</h2>
    )
  }
  if(!loading && data) {
    return (
      <Select
      options={data && data.map( oneData =>(
        {
            id: oneData.id,
            value:  oneData.name,
            label: oneData.name
        })
      )}
      onChange={(character) => {
        selectCharacter(character)
      }}
      isMulti
      >-Select-</Select>
    )
  }
}

export default SelectCharacter