function Converter() {
  
    let valorElemento = document.getElementById("valor")
    let valor = valorElemento.value
    let valorEmDolar = parseFloat(valor)
    
    let valorEmReal = valorEmDolar / 5
      
    let elementoValorConvertido = document.getElementById("valorConvertido")
    let valorConvertido = "O resultado em dolár é U$ " + valorEmReal.toFixed(2)
    
    elementoValorConvertido.innerHTML = valorConvertido
    
  }
  
  function ConverterParaBitcoin() {
    let valorElemento2 = document.getElementById("valor")
    let valor2 = valorElemento2.value
    let valorEmReal2 = parseFloat(valor2)
    
    let valorEmBitcoin = valorEmReal2 / 119133
      
    let elementoValorConvertidoParaBitcoin = document.getElementById("valorConvertidoParaBitcoin")
    let valorConvertido2 = "O resultado em Bitcoin é " + valorEmBitcoin.toFixed(7)
    
    elementoValorConvertidoParaBitcoin.innerHTML = valorConvertido2
    
  }
  
  function ConverterparaEuro() {
    
    let valorElemento3 = document.getElementById("valor")
    let valor3 = valorElemento3.value
    let valorEmReal3 = parseFloat(valor3)
    
    let valorEmEuro = valorEmReal3 / 5.34    
    
     let elementoValorConverterparaEuro = document.getElementById("valorConverterparaEuro")
    let valorConvertido3 = "O resultado em Euro é " + valorEmEuro.toFixed(2)
    
      elementoValorConverterparaEuro.innerHTML = valorConvertido3
    
  }