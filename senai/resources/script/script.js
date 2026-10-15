
let fila = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo", "Fernanda", "Gabriel"];
console.log("Fila inicial da clínica:", fila);

//comum
fila.push("Helena");
console.log("após adicionar cliente comum  no final:", fila);

//prioritario
fila.unshift("dona Marta");
console.log("Após adicionar cliente prioritário no início:", fila);

//atendido
let clienteAtendido = fila.shift();
console.log(`Atendendo cliente: ${clienteAtendido}`);
console.log("Fila após o atendimento:", fila);

//desistente
let clienteDesistente = fila.pop();
console.log(`Cliente desistiu: ${clienteDesistente}`);
console.log("Fila final após a desistência:", fila);