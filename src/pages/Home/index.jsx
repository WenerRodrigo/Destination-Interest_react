import {  CardPeople } from "../../components/Cards/CardPeople"
import {  InterestCard } from "../../components/Cards/InterestCard"
import {  Button } from "../../components/Button"

import "./styles.css"


export function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="box_one">
          <CardPeople/>
          <InterestCard />
        </div>
        <div className="box_two">
          <Button />
        </div>
      </div>
    </div>
  );
}
