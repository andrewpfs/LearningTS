import { ChangeEvent, SyntheticEvent, useState } from 'react';
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';

function App() {
  const [search, setSearch] = useState<string>("")
  
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
    console.log(event);
  }

  const onClick = (event: SyntheticEvent) => {
    console.log(event)
  }
  
  return (
    <div className = "App">
      <Search onClick={onClick} search={search} handleChange={handleChange}/>
      <CardList />
    </div>
  );
}

export default App;
