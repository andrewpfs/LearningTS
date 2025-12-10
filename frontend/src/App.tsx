import { ChangeEvent, SyntheticEvent, useState } from 'react';
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import { CompanySearch } from './company';
import { searchCompanies } from './api';
import ListPortfolio from './Components/Portfolio/ListPortfolio/ListPortfolio';

function App() {
  const [search, setSearch] = useState<string>("")
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([])
  const [serverError, setServerError] = useState<Error | null> (null) //either takes in an error or defaults at null
  const [portfolioValues, setPortfolioValues] = useState<string[]>([])
  
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
    //console.log(event);
  }
  const onPortfolioCreate = (event: any) => {
    event.preventDefault() //this is added to stop page from reefreshing
    const exists = portfolioValues.find((value) => value === event.target[0].value)
    if (exists) return
    const updatedPortfolio = [...portfolioValues, event.target[0].value]
    setPortfolioValues(updatedPortfolio)
    //console.log(event)
  }
  const onPortfolioDelete = (e: any) => {
    e.preventDefault()
    const filteredPortfolio = portfolioValues.filter((value) => {
      return value !== e.target[0].value
    })
    setPortfolioValues(filteredPortfolio)
  }

  const onSearchSubmit = async (event: SyntheticEvent) => {
    event.preventDefault()
    try {
      const data = await searchCompanies(search);
      setSearchResult(data);
    } catch (err) {
      setServerError(err as Error);
    }
    console.log(searchResult)
  }
  
  
  return (
    <div className = "App">
      <Search 
        onSearchSubmit={onSearchSubmit} 
        search={search} 
        handleSearchChange={handleSearchChange}
      />
      <ListPortfolio portfolioValues = {portfolioValues} onPortfolioDelete = {onPortfolioDelete}/>
      {serverError && <h1>{serverError.message}</h1>}
      <CardList 
        searchResults={searchResult} 
        onPortfolioCreate={onPortfolioCreate}
      />
    </div>
  );
}

export default App;
