import carros from './carros.js'

//para achar um carro por id

const procuraId = carros.reduce((accumulator, currentValue) =>{
    accumulator[currentValue.id] = currentValue.modelo
    return accumulator
} , [])

console.log(procuraId[5]);

//ano maximo

const ymax = carros.reduce((accumulator, currentValue)=>
    currentValue.ano> accumulator.ano ? currentValue : accumulator
)
console.log("O ano mais atual é : " + ymax.ano)



//para filtar por marca

let filteredCar = carros.filter( (car)=> car.marca === "Volkswagen");
console.log("Os carros encontrados são: " , filteredCar)

//para selecionar apenas modelo e ano dentre as marcas filtradas
let toPrint = ''

filteredCar.forEach(car => {
    console.log("Modelo do carro: " + car.modelo + '   Ano: ' + car.ano + "\n") 
});

//para achar o total de vendas das marcas filtradas

let total = filteredCar.map(custo => custo.vendas)
let valor = total.reduce((acc, custo)=> acc + custo)
console.log("Valor total é: " + valor) 