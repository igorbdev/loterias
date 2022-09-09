export function Quina() {
  let quina = [];

  while (quina.length < 5) {
    const numero = Math.floor(Math.random() * 79 + 1)
      .toString()
      .padStart(2, "0");

    if (!quina.includes(numero)) {
      quina.push(numero);
    }
    console.log(quina);
  }

  quina.sort();

  return quina;
}
