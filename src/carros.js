let carros = [
//criação de objetos
    {
        id : 1 ,
        marca : "Volkswagen" , 
        modelo : "CrossFox",
        vendas : 15400, //vendas ao ano
        ano : 2005
    },
    {
        id : 2 ,
        marca : "Hyundai" , 
        modelo : "HB20",
        vendas : 11389, //vendas ao ano
        ano : 2012
    },
    {
        id : 3 ,
        marca : "Fiat" , 
        modelo : "Siena",
        vendas : 92455, //vendas ao ano
        ano : 2008
    }, 
    {
        id : 4 ,
        marca : "Volkswagen" , 
        modelo : "Voyage",
        vendas : 87322, //vendas ao ano
        ano : 2008
    },
    {
        id : 5 ,
        marca : "General Motors" , 
        modelo : "Corsa Sedan",
        vendas : 88558, //vendas ao ano
        ano : 2012
    },
    {
        id : 6 ,
        marca : "Toyota" , 
        modelo : "Corolla",
        vendas : 54760, //vendas ao ano
        ano : 2019
    },
    {
        id : 7 ,
        marca : "Honda" , 
        modelo : "Civic",
        vendas : 46100, //vendas ao ano
        ano : 2012
    },
    {
        id : 8 ,
        marca : "Fiat" , 
        modelo : "Punto",
        vendas : 36982, //vendas ao ano
        ano : 2005
    },
    {
        id : 9 ,
        marca : "Honda" , 
        modelo : "City",
        vendas : 27153, //vendas ao ano
        ano : 2009
    },
    {
        id : 10 ,
        marca : "General Motors" , 
        modelo : "Agile",
        vendas : 50750, //vendas ao ano
        ano : 2009
    },
    {
        id : 11 ,
        marca : "Volkswagen" , 
        modelo : "SpaceFox",
        vendas : 19490, //vendas ao ano
        ano : 2018
    }

]

function getCarros(){
    return carros
}

export default getCarros()