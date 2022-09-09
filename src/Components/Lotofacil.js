export function Lotofacil() {
  let lotofacil = [];

  while (lotofacil.length < 15) {
    const numero = Math.floor(Math.random() * 24 + 1)
      .toString()
      .padStart(2, "0");

    if (!lotofacil.includes(numero)) {
      lotofacil.push(numero);
    }
    console.log(lotofacil);
  }

  lotofacil.sort();

  return lotofacil;
}
