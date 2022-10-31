import axios from "axios";
import { useEffect, useState } from "react";

import "./styles.css"

export function SelectStates() {
  const [ufs, setUfs] = useState([]);

  useEffect(() => {
    axios.get("https://amazon-api.sellead.com/country").then((response) => {
      setUfs(response.data);
      console.log("estados", response.data);
    });
  }, []);

  return (
    <select name="uf" id="uf" className="selectStates_select">
      Estado
      <option value="0" className="selectStates_option">
        Selecione
      </option>
      {ufs.map((uf) => (
        <option key={uf.id} value={uf.id}>
          {uf.name}
        </option>
      ))}
    </select>
  );
}
