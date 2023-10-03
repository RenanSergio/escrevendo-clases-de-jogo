class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'usou um ataque desconhecido';
          break;
      }
  
      const mensagem = `O ${this.tipo} atacou usando ${ataque}`;
      return mensagem;
    }
  }
  
  const heroi1 = new Heroi('Gandalf', 1000, 'mago');
  const mensagemAtaque = heroi1.atacar();
  console.log(mensagemAtaque);
  /*
  class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'usou um ataque desconhecido';
          break;
      }
  
      const mensagem = `O ${this.tipo} atacou usando ${ataque}`;
      return mensagem;
    }
  }
  
  const tiposPersonagem = ["mago", "guerreiro", "monge", "ninja"];
  
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question(`Selecione o tipo de personagem (${tiposPersonagem.join(", ")}): `, (tipoSelecionado) => {
    if (tiposPersonagem.includes(tipoSelecionado)) {
      const heroi1 = new Heroi('Gandalf', 1000, tipoSelecionado);
      const mensagemAtaque = heroi1.atacar();
      console.log(mensagemAtaque);
    } else {
      console.log("Tipo de personagem inválido");
    }
    rl.close();
  });*/