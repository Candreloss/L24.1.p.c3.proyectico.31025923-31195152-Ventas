export default class CL_Tienda {
    constructor(montoCaja, porcInc) {
        this.montoCaja = montoCaja;
        this.porcInc = porcInc;
        this.ventas = [];
    }

    set montoCaja(mc){
        this._montoCaja = +mc;
    }
    get montoCaja(){
        return this._montoCaja;
    }

    set porcInc(pI){
        this._porcInc = +pI;
    }
    get porcInc(){
        return this._porcInc;
    }

    agregarVenta(venta) {
        this.ventas.push(venta);
    }

    eliminarVenta(factura) {
        let facturav = -1
        for (let i = 0; i < this.ventas.length; i++) 
            if (this.ventas[i].factura == factura) 
                facturav = i;
        if (facturav !== -1) this.ventas.splice(facturav, 1)
        return facturav !== -1;
    }

    modificarventa(factura, datosn){
        const ventas = this.ventas.find((ventas) => ventas.factura == factura);
        if(ventas){
            ventas.nombre = datosn.nombre || ventas.nombre;
            ventas.factura = datosn.factura || ventas.factura;
            ventas.costo = datosn.costo || ventas.costo;
            ventas.cnArt = datosn.cnArt || ventas.cnArt;
        }
    }

    inicialcaja(){
        return this._montoCaja
    }
    
    mayor(){
        let mayor = this.ventas[0].costopagado();
        for (let i = 1; i < this.ventas.length; i++) {
            if (this.ventas[i].costopagado() > mayor) {
                mayor = this.ventas[i].costopagado();
            }
        return mayor;
        }
    }
    quienmayor(){
        let mayor = this.mayor();
        return this.ventas.filter((venta) => venta.costopagado() === mayor);
    }

    unicoart(){
        let art = 1
        let unico = this.ventas;
        for (let i = 0; i < this.ventas.length; i++) {
            if (this.ventas[i].cnArt === art) {
                unico.push(this.ventas[i]);
            }
            return unico;
        }
    }
    quienesunico(){
        let art = 1
        return this.ventas.filter((venta) => venta.cnArt === art);
    }

    totalcaja(){
        let acumTotal = 0;
        let montoTotal = 0;
        for (let i = 0; i < this.ventas.length; i++) {
            acumTotal += this.ventas[i].costopagado();
            montoTotal = this._montoCaja + acumTotal;
        }
        return montoTotal;
    }
}