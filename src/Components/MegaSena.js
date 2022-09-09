export function MegaSena() {
  let megasena = [];

  while (megasena.length < 6) {
    const numero = Math.floor(Math.random() * 59 + 1)
      .toString()
      .padStart(2, "0");

    if (!megasena.includes(numero)) {
      megasena.push(numero);
    }
    console.log(megasena);
  }

  megasena.sort();

  return megasena;
}
