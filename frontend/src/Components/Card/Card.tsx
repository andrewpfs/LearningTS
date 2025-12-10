import React, { JSX, SyntheticEvent } from 'react'
import "./Card.css"
import { CompanySearch } from '../../company'
import AddPortfolio from '../Portfolio/AddPortfolio/AddPortfolio'


interface Props{
  id: string
  searchResult: CompanySearch  //indiviudal compnay 
  onPortfolioCreate: (event: SyntheticEvent) => void
}

const Card: React.FC<Props> = ({id, searchResult, onPortfolioCreate}: Props): JSX.Element => {
  return (
  <div key={id} id={id} className = "card">
    <img alt="company logo"/>    
    <div className = "details">
      <h2>{searchResult.name} ({searchResult.symbol})</h2>
      <p>${searchResult.currency}</p>
    </div>
    <p className = "info">
      {searchResult.exchange} - {searchResult.exchangeFullName}
    </p>
    <AddPortfolio onPortfolioCreate={onPortfolioCreate} symbol={searchResult.symbol}/>
  </div>
  
  )
}

export default Card