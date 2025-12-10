import React, { JSX } from "react";
import Card from "../Card/Card";

interface Props {}

const CardList: React.FC<Props> =  (props: Props): JSX.Element => {
  return( 
    <div>
      <Card companyName = "Apple" ticker="AAPL" price ={150}/>
      <Card companyName = "Microsoft" ticker="MSFT" price ={300}/>
      <Card companyName = "Meta" ticker="META" price ={667}/>
    </div>
  );
};

export default CardList;
