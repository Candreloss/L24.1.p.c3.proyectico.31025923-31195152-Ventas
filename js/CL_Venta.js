export default class CL_Venta {
    constructor(nombre, factura, costo, cnArt, porcInc){
        this.nombre = nombre;
        this.factura = factura;
        this.costo = costo;
        this.cnArt = cnArt;
        this.porcInc = porcInc
    }
    set nombre(n){
        this._nombre = n;
    }
    get nombre(){
        return this._nombre;
    }

    set factura(f){
        this._factura = +f;
    }
    get factura(){
        return this._factura;
    }

    set costo(c){
        this._costo = +c;
    }
    get costo(){
        return this._costo;
    }

    set cnArt(cA){
        this._cnArt = +cA;
    }
    get cnArt(){
        return this._cnArt;
    }

    set porcInc (pI) {
        this._porcInc = +pI;
    }
    get porcInc () {
        return this._porcInc;
    }

    costopagado(){
        return this.costo + (this.costo * (this.porcInc / 100));
    }

}