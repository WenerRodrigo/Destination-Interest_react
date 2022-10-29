import "./styles.css"


export function CardPeople() {
  return (
    <div className="cardpeople">
      <div className="container">
        <h1 className="cardPeople_title">Dados Pessoais</h1>
        <label className="cardPeople_label">Nome</label>
        <input
          type="text"
          name="nome"
          placeholder="Digite seu Nome"
          required
          className="cardPeople_input"
        />
        <br />
        <label className="cardPeople_label">Email</label>
        <input
          type="text"
          name="email"
          placeholder="Digite seu Email"
          required
          className="cardPeople_input"
        />
        <br />
        <label className="cardPeople_label">Telefone</label>
        <input
          type="text"
          name="telefone"
          placeholder="Digite seu Telefone"
          required
          className="cardPeople_input"
        />
        <br />
        <label className="cardPeople_label">CPF</label>
        <input
          type="text"
          name="cpf"
          placeholder="Digite seu Cpf"
          required
          className="cardPeople_input"
        />
      </div>
    </div>
  );
}
