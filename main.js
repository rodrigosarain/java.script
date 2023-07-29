const productos= [
    {nombre: "Campera de lino", precio: 25000},
    {nombre: "Bermuda evisu", precio: 25000},
    {nombre: "Pantalon cargo diseñador", precio: 35000},
    {nombre: "Camiseta PsG vintage", precio: 15000},
    {nombre: "Pantalon dickies", precio: 25000},
];

let carrito= []

let seleccion = prompt ("Bienvenido, desea realizar una compra ? si o no")

while (seleccion != "si" &&  seleccion != "no") {
    alert("por favor ingresa si o no ")
    seleccion = prompt ("Bienvenido, desea realizar una compra ? si o no")
}

if (seleccion == "si"){
    alert("El stock disponible es este:")
    let stock = productos.map (
        (producto) => producto.nombre + " " + producto.precio + " pesos ")
    alert (stock.join (" - "))
} else if (seleccion == "no"){
    alert("te esperamos en un futuro !")
}

while (seleccion != "no"){
    let producto = prompt ("agrega un producto a tu carrito")
    let precio = 0

    if (producto == "Bermuda evisu" || producto == "Camiseta PsG vintage" || producto =="Campera de lino" || producto == "Pantalon cargo diseñador" || producto == "Pantalon dickies" ){
        switch (producto) {
            case "Bermuda evisu":
                precio = 25000;
                break;
            case "Camiseta Psg Vintage":
                precio = 15000;
                break;
            case "Campera de lino":
                precio = 25000;
                break;
            case "Pantalon cargo diseñador":
                precio = 35000;
                break;
            case "Pantalon dickies":
                precio = 25000;
                break;
            default:
                break;
        }
    let unidades = parseInt(prompt("cuantas unidades quiere llevar"))
    
    carrito.push ({producto, unidades, precio})
    console.log(carrito);
    }else{
        alert(" sin Stock ")
    }

    seleccion = prompt ("algo mas ?")
    while (seleccion === "no"){
        alert("gracias por su compra !")
        carrito.forEach((carritoFinal) => {
            alert( `producto: ${carritoFinal.producto}, unidades ${carritoFinal.unidades}`)
        })
    break;
    }
}

const total = carrito.reduce ((acc, el) => acc + el.precio * el.unidades, 0)
alert(`el total a pagar es:  ${total}`)

