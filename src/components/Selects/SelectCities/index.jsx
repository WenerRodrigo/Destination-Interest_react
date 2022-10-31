import axios from "axios";
import { useEffect, useState } from "react";

import "./styles.css"

export function SelectCities() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    axios.get("https://amazon-api.sellead.com/city").then((response) => {
      setCities(response.data);
      console.log("cidades", response.data);
    });
  }, []);

  return (
    <select name="uf" id="uf" className="selectCities_select">
      Cidade
      <option value="0" className="selectCities_option">
        Selecione
      </option>
      {cities.map((city) => (
        <option key={city.id} value={city.id}>
          {city.name}
        </option>
      ))}
    </select>
  );
}
