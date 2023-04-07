import React from "react";
const form = () => {
  return (
    <div className="div-form">
      <form className="form-client">
        <label for={"name"}>Nome Completo:</label>
        <input type="text" id="name" name="name" />
        <label for={"phone"}>Celular:</label>
        <input type="text" id="phone" name="phone" />
        <label for="cep">CEP:</label>
        <input type="text" id="cep" name="cep" />
        <label for={"city"}>Cidade:</label>
        <input type="text" id="city" name="city" />
        <label for={"state"}>Estado:</label>
        <input type="text" id="state" name="state" />
        <label for={"neighborhood"}>Bairro:</label>
        <input type="text" id="neighborhood" name="neighborhood" />
        <label for={"address"}>Rua:</label>
        <input type="text" id="address" name="address" />
        <label for={"number"}>Número:</label>
        <input type="text" id="number" name="number" />
        <button type="button" className="btn">
          Fechar Compra
        </button>
      </form>
    </div>
  );
};

export default form;
