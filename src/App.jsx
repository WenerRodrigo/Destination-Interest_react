import { Button } from "./components/Button";
import { CardPeople } from "./components/Cards/CardPeople";
import { InterestCard } from "./components/Cards/InterestCard";

function App() {
  return (
      <div className="app">
        <div className="container">
          <div className="box_one">
            <CardPeople/>
            <InterestCard/>
          </div>
          <div className="box_two">
            <Button/>
          </div>
        </div>
      </div>
    
  );
}

export default App;
