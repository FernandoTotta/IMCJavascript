class Imc {
    constructor(altura, peso){
        this._altura = altura
        this._peso = peso
    }
    calcularImc(){
        return this._peso / (this._altura * this._altura)
    }
}    