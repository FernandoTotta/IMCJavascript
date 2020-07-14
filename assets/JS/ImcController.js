class ImcController{
    constructor(){
        let $ = document.querySelector.bind(document)
        this._inputPeso = $ ('#Peso')
        this._inputAltura = $ ('#altura')
        this._inputBotao = $ ('#enviar')
        this.span = $('#InformacaoIMC')
    }   
    calcular(event){
        event.preventDefault()
        let calcularImc = new Imc(parseFloat(this._inputAltura.value),parseInt(this._inputPeso.value)).calcularImc().toFixed(2)
        console.log(calcularImc)
        if ( calcularImc < 18.5){
            this.span.innerHTML = "Atencao voce esta anorexo"
            this.span.classList.add('peso-baixo')
        }
        if ( calcularImc >= 18.5 && calcularImc < 25){
            this.span.innerHTML = "parabens voce esta saudavel"
            this.span.classList.add('peso-normal')
        }   
        if ( calcularImc >= 25 && calcularImc <30){
            this.span.innerHTML = "Atencao sobrepeso"
            this.span.classList.add('peso-acima')
        }
        if ( calcularImc >=30 && calcularImc <35){
            this.span.innerHTML = "Atencao primeiro grau de obesidade"
            this.span.classList.add('peso-obesidade1') 
        }
        if (calcularImc >=35 && calcularImc <40){
            this.span.innerHTML = "Atencao segundo grau de obesidade"
            this.span.classList.add('peso-obesidade2')
        }
        if (calcularImc >=40){
            this.span.innerHTML = "Atencao obesidade morbida"
            this.span.classList.add('peso-obesidade3')
        }

    }
}