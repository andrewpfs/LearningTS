import React, { ChangeEvent, JSX, SyntheticEvent } from 'react'

interface Props {
  handleSearchChange: (event: ChangeEvent<HTMLInputElement>) => void
  onSearchSubmit: (event: SyntheticEvent) => void
  search: string | undefined
}

const Search: React.FC<Props> = ({
  handleSearchChange, 
  onSearchSubmit, 
  search
}: Props): JSX.Element => {
  return (
    <>
      <form onSubmit={onSearchSubmit}>
        <input value={search} onChange={handleSearchChange} />
      </form>
    </>
  )
}

export default Search