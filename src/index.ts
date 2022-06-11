let miNumero: number = Number(prompt("Ingrese el numero..."));
function invertirArreglo(numero: number): number[] {
  let miArreglo: number[] = new Array(numero);

  for (i = 0; i < miArreglo.length; i++) {
    miArreglo[i] = numero;
    numero--;
    console.log(miArreglo[i]);
  }

  return miArreglo;
}

console.log(invertirArreglo(miNumero));
