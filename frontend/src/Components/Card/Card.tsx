import React, { JSX } from 'react'
import "./Card.css"
import { CompanySearch } from '../../company'


interface Props{
  id: string
  searchResult: CompanySearch  //indiviudal compnay 
}

const Card: React.FC<Props> = ({id, searchResult}: Props): JSX.Element => {
  return (
  <div className = "card">
    <img alt="company logo"/>    
    <div className = "details">
      <h2>{searchResult.name} ({searchResult.symbol})</h2>
      <p>${searchResult.currency}</p>
    </div>
    <p className = "info">
      {searchResult.exchange} - {searchResult.exchangeFullName}
    </p>
  </div>
  
  )
}

export default Card