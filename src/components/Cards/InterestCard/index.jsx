export function InterestCard() {
  return (
    <div>
      <h2 className="interestCard_title">Dados de Interesse</h2>
      <select className="interestCard_select">
        País
        <option className="interestCard_option">Selecione</option>
        <option className="interestCard_option">Brasil</option>
        <option className="interestCard_option">Portugal</option>
        <option className="interestCard_option">França</option>
      </select>
      <br />
      <select className="interestCard_select">
        Cidade
        <option className="interestCard_option">Selecione</option>
        <option className="interestCard_option">Fortaleza</option>
        <option className="interestCard_option">São Paulo</option>
      </select>
    </div>
  );
}
