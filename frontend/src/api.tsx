import { CompanySearch } from "./company";

interface SearchResponse {
  data: CompanySearch[];
}

export const searchCompanies = async (query : string): Promise<CompanySearch[]> => {
    const res = await fetch(`https://financialmodelingprep.com/stable/search-symbol?query=${query}&apikey=${process.env.REACT_APP_API_KEY}`) 
    if(!res.ok){
      throw new Error(`Response status: ${res.status}`)
    }
    const result = await res.json()
    console.log(result)
    return result
}