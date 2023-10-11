export default class PortaModel {
  #numero: string;
  #temPresente: boolean;
  #selecionada: boolean;
  #aberta: boolean;

  constructor(
    numero: string,
    temPresente: boolean = false,
    selecionada: boolean = false,
    aberta: boolean = false
  ) {
    this.#numero = numero;
    this.#temPresente = temPresente;
    this.#selecionada = selecionada;
    this.#aberta = aberta;
  }

  get numero() {
    return this.#numero;
  }
  get temPresente() {
    return this.#temPresente;
  }
  get selecionada() {
    return this.#selecionada;
  }
  get aberta() {
    return this.#aberta;
  }

  get fechada() {
    return !this.#aberta;
  }

  desmarcar() {
    const selecionada = false;
    return new PortaModel(
      this.numero,
      this.temPresente,
      selecionada,
      this.aberta
    );
  }

  alterarSelecao() {
    const selecionada = !this.selecionada;
    return new PortaModel(
      this.numero,
      this.temPresente,
      selecionada,
      this.aberta
    );
  }

  abrir() {
    const aberta = true;
    return new PortaModel(
      this.numero,
      this.temPresente,
      this.selecionada,
      aberta
    );
  }
}
