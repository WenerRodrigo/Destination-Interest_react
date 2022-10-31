import { SelectCities } from "../../Selects/SelectCities";
import { SelectStates } from "../../Selects/SelectStates";
import "./styles.css";

export function InterestCard() {
  return (
    <div className="interestCard">
      <div className="container">
        <h2 className="interestCard_title">Dados de Interesse</h2>
        <div className="interestCard_box">
          <div className="interestCard_states">
            <SelectStates />
          </div>
          <br />
          <div className="interestCard_cities">
            <SelectCities />
          </div>
        </div>
      </div>
    </div>
  );
}
