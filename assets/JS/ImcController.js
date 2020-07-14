class ImcController{
    constructor(){
        let $ = document.querySelector.bind(document)
        this._inputPeso = $ ('#Peso')
        this._inputAltura = $ ('#altura')
        this._inputBotao = $ ('#enviar')
    }
    calcular(event){
        event.preventDefault()
        console.log('funciona')
    }
}