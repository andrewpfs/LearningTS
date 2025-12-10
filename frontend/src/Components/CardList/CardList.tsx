import React, { JSX } from "react";
import Card from "../Card/Card";
import { CompanySearch } from "../../company";
import { v4 as uuidv4} from "uuid"

interface Props {
  searchResults: CompanySearch[];
}

const CardList: React.FC<Props> = ({searchResults}: Props): JSX.Element => {
  return( 
    <>
      {searchResults.length > 0 ? ( //conditional render based on if hte results are empty or not
        searchResults.map((result) => {
          return <Card id={result.symbol} key={uuidv4()} searchResult={result} />
        })
      ) :(
        <h1>No Results</h1>
      )}
    </>
  );
};

export default CardList;
