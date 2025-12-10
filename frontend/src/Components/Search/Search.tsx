import React, { ChangeEvent, JSX, useState, SyntheticEvent } from 'react'

interface Props {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
  onClick: (event: SyntheticEvent) => void
  search: string | undefined
}

const Search: React.FC<Props> = ({
  handleChange, 
  onClick, 
  search
}: Props): JSX.Element => {
  return (
    <div>
      <input value = {search} onChange = {(e) => handleChange(e)}></input>
      <button onClick= {(e) => onClick(e)}/>
    </div>
  )
}

export default Search