import DT_Tienda from "./DT_Tienda.js";
import DT_Ventas from "./DT_Ventas.js";
import CL_Tienda from "./CL_Tienda.js";
import CL_Venta from "./CL_Venta.js";

const tienda = new CL_Tienda(DT_Tienda.montoCaja, DT_Tienda.porcInc);

DT_Ventas.forEach((venta) => tienda.agregarVenta(
    new CL_Venta(venta.nombre, venta.factura, venta.costo, venta.cnArt, tienda.porcInc)
))

let agregarVenta = (tienda) => {
    let nombre = prompt("Ingrese el nombre del cliente: ");
    let factura = prompt("Ingrese la factura: ");
    let costo = prompt("Ingrese el costo: ");
    let cnArt = prompt("Ingrese la cantidad de articulos: ");
    let venta = new CL_Venta(nombre, factura, costo, cnArt, tienda.porcInc);
    tienda.agregarVenta(venta);
    alert("Venta agregada.");
}

let eliminarVenta = (tienda) => {
    let factura = Number(prompt("Ingrese la factura de la venta a eliminar: "));
    if(tienda.eliminarVenta(factura)){
        alert("Venta eliminada.");}
    else {
        alert("Venta no encontrada.");
    }
}

let modificarventa = (tienda, salida) => {
    let factura = Number(prompt("Ingrese la factura de la venta a modificar: "));
    let datosn = {};
    datosn.nombre = prompt("Ingrese el nuevo nombre: ");
    datosn.factura = Number(prompt("Ingrese la nueva factura: "));
    datosn.costo = Number(prompt("Ingrese el nuevo costo: "));
    datosn.cnArt = Number(prompt('Ingrese la nueva cantidad de articulos: '));
    tienda.modificarventa(factura, datosn);
    salida.innerHTML = alert("Venta modificada.");
}

let mostrarinicial = (tienda, salida2) => {
    let montoCaja = tienda.inicialcaja()
    salida2.innerHTML = `El monto de la caja es: ${montoCaja}`
}

let quienmayor = (tienda, salida2) => {
    let ventas = tienda.quienmayor();
    salida2.innerHTML = `La venta con mayor monto es: `
    ventas.forEach((venta) => {
        salida2.innerHTML += `<br>Nombre: ${venta.nombre}; Factura: ${venta.factura}; Pagado: ${venta.costopagado()} $ `;
})
}

let quienesunart = (tienda, salida2) => {
    let ventas = tienda.quienesunico();
    salida2.innerHTML = `Clientes que sólo llevaron un artículo: `
    ventas.forEach((venta) => {
    salida2.innerHTML += `<br>Nombre: ${venta.nombre}; Factura: ${venta.factura}`;
    })
}

let total = (tienda, salida2) => {
    let totalcaja = tienda.totalcaja();
    salida2.innerHTML = `El total en caja es: ${totalcaja} $`
}

let listaventas = (tienda) => {
    let ventas = tienda.ventas;
    let salidaT = `
    <br><table>
        <tr>
            <th>Nombre</th>
            <th>Factura</th>
            <th>Costo</th>
            <th>Cantidad de Articulos</th>
            <th>Costo Pagado</th>
        </tr>`;
    ventas.forEach((venta) => {
        salidaT += `
        <tr>
            <td>${venta.nombre}</td>
            <td>${venta.factura}</td>
            <td>${venta.costo}</td>
            <td>${venta.cnArt}</td>
            <td>${venta.costopagado()}</td>
        </tr>`;
    });
    salidaT += `</table>`;
    salida2.innerHTML = salidaT;
    }

let salida = document.getElementById("salida");
let salida2 = document.getElementById("salida2");
let opciones = document.getElementById("opciones");

opciones.onclick = () => {
    let opcion = Number(prompt("Ingrese una opción: "));
    switch (opcion) {
    case 1: 
        listaventas(tienda, salida);
        break;
    case 2:
        agregarVenta(tienda, salida);
        break;
    case 3:
        eliminarVenta(tienda, salida);
        break;
    case 4:
        modificarventa(tienda, salida);
        break;
    case 5:
        mostrarinicial(tienda, salida2)
        break;
    case 6:
        quienmayor(tienda, salida2);
        break;
    case 7:
        quienesunart(tienda, salida2);
        break;
    case 8:
        total(tienda, salida2);
        break;
    default:
        alert("Opcion incorrecta.");
        break;
    }
}


