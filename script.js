function cripto(){
  let criptografar = document.getElementById("criptografar").value
  let descriptografar = document.getElementById("descriptografar")
  let listaCripto = []

  for(let i = 0; i < criptografar.length; i++){
    listaCripto.push(criptografar[i])

    let criptografia = criptografar.replace("e", "enter").replace("i", "imes").replace("a", "ai").replace("o", "ober").replace("u", "ufat")

    var resultado = document.getElementById("resultado")
    descriptografar.value = criptografia
  }
}

function descripto (){
  let descriptografar = document.getElementById("descriptografar").value
  let criptografar = document.getElementById("criptografar")
  let listaDescripto = []

  for(let i = 0; i < descriptografar.length; i++){
    listaDescripto.push(descriptografar[i])

    var descriptografia = descriptografar.replace("enter", "e").replace("imes", "i").replace("ai", "a").replace("ober", "o").replace("ufat", "u")
    var resultado = document.getElementById("resultado")
    criptografar.value = descriptografia
    
  }
}

