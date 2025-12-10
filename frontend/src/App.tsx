import { ChangeEvent, SyntheticEvent, useState } from 'react';
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import { CompanySearch } from './company';
import { searchCompanies } from './api';

function App() {
  const [search, setSearch] = useState<string>("")
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([])
  const [serverError, setServerError] = useState<Error | null> (null) //either takes in an error or defaults at null
  
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
    console.log(event);
  }

  const onClick = async (event: SyntheticEvent) => {
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
      <Search onClick={onClick} search={search} handleChange={handleChange}/>
      {serverError && <h1>{serverError.message}</h1>}
      <CardList searchResults={searchResult}/>
    </div>
  );
}

export default App;
