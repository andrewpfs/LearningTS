import React, { ChangeEvent, JSX, useState, SyntheticEvent } from 'react'

interface Props {}

const Search: React.FC<Props> = (props: Props): JSX.Element => {
  const [search, setSearch] = useState<string>("")
  
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
    console.log(event);
  }

  const onClick = (event: SyntheticEvent) => {
    console.log(event)
  }

  return (
    <div>
      <input value = {search} onChange = {(e) => handleChange(e)}></input>
      <button onClick= {(e) => onClick(e)}/>
    </div>
  )
}

export default Search