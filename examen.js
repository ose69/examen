class Sumas{
    constructor(dato){
        this.dato=dato;
        this.x1=null;
        this.y1=null;
        this.x2=null;
        this.y2=null;
    }
    set Dato(valor){
        this.dato=valor;
    }
    set X1(valor){
        this.x1=valor;
    }
    set Y1(valor){
        this.y1=valor;
    }
    set X2(valor){
        this.x2=valor;
    }
    set Y2(valor){
        this.y2=valor;
    }
    get Dato(){
        return this.dato
    }
    get X1(){
        return this.x1
    }
    get Y1(){
        return this.Y1
    }
    get X2(){
        return this.X2
    }
    get Y1(){
        return this.Y2
    }
}

class Operation{
    sumar(){

        let suma=(x2-x1) + (y2-y1)
        return suma;
    }
}