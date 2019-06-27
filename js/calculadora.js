  let macros = []
  let proteinaTotal
  let carboTotal
  let gordTotal
  let vpeso = document.querySelector('.peso')
  let valtura = document.querySelector('.altura')
  let vidade = document.querySelector('.idade')
  let tmb = document.querySelector('.tmb')
  let prot = document.querySelector('.prot')
  let carb = document.querySelector('.carb')
  let gord = document.querySelector('.gord')
  let resultTxt = document.querySelector('.resultTxt');
  let calcular = document.querySelector('.calcular')
  let reset = document.querySelector('.reset')
  let txtProt = document.querySelector('.txtProt')
  let txtCarb = document.querySelector('.txtCarb')
  let txtGord = document.querySelector('.txtGord')
  let error = document.querySelector('.error')
  let alertTxtPeso = document.querySelector('.alertTxtPeso')
  let alertTxtAltura = document.querySelector('.alertTxtAltura')
  let alertTxtIdade = document.querySelector('.alertTxtIdade')
  let alertTxtTmb = document.querySelector('.alertTxtTmb')
  let alertTxtProt = document.querySelector('.alertTxtProt')
  let alertTxtCarb = document.querySelector('.alertTxtCarb')
  let alertTxtGord = document.querySelector('.alertTxtGord')
  
  
  calcular.onclick = function (){
    resetAlert()
    validaCampos()
    console.log(macros)
  
  }
  
  reset.onclick = function (){
    resetAlert()
    resetInput()
    removeClass()
  }
  
  function validaCampos () {
    let valorProt = parseInt(prot.value)
    let valorCarb = parseInt(carb.value)
    let valorGord = parseInt(gord.value)
  
    if(vpeso.value < 50) {alertTxtPeso.innerHTML = "!"}
    else if(valtura.value < 50) {alertTxtAltura.innerHTML = "!"}
    else if(vidade.value < 13) {alertTxtIdade.innerHTML = "!"}
    else if(prot.value < 1) {alertTxtProt.innerHTML = "!"}
    else if(carb.value < 1) {alertTxtCarb.innerHTML = "!"}
    else if(gord.value < 1) {alertTxtGord.innerHTML = "!"}
    else if((valorProt + valorCarb + valorGord) != 100) {
      resultTxt.style.display = "none"
      error.innerHTML = `
                         
                          A soma Total de<br>
                          proteina - carbo - gordura<br>
                          deve ser igual a 100 % <br>
                          Valor da soma atual: <span style="color:red;"> ${(valorProt + valorCarb + valorGord)} % </span> <br>
                         
                        `
    }
    else {
      macros.push(prot.value)
      macros.push(carb.value)
      macros.push(gord.value)
      calculaBasal()
      calculaProcentagemMacros(...macros)
      preencheCampos ()
      applyClass()
      resultTxt.style.display = "flex"
      error.innerHTML = ''
      macros = []      
    }
  }
  
  function resetInput (){
    vpeso.value = ''
    valtura.value = ''
    vidade.value = ''
    tmb.value = ''
    prot.value = ''
    carb.value = ''
    gord.value = ''
    txtProt.textContent = ''
    txtCarb.textContent = ''
    txtGord.textContent = ''
    error.textContent = ''
  
  }
  
  function resetAlert (){
    alertTxtPeso.innerHTML = ''
    alertTxtAltura.innerHTML = ''
    alertTxtIdade.innerHTML = ''
    alertTxtTmb.innerHTML = ''
    alertTxtProt.innerHTML = ''
    alertTxtCarb.innerHTML = ''
    alertTxtGord.innerHTML = ''
  }
  
  function calculaProcentagemMacros (prot, carb, gord) {
    proteinaTotal = (+tmb.value / 100) * (+prot / 4)
    carboTotal = (+tmb.value / 100) * (+carb / 4)
    gordTotal = (+tmb.value / 100) * (+gord / 9)
  }
  
  function preencheCampos() {
    txtProt.textContent = `Proteina: ${proteinaTotal.toFixed(0)}g`
    txtCarb.textContent = `Carbo: ${carboTotal.toFixed(0)}g`
    txtGord.textContent = `Gordura: ${gordTotal.toFixed(0)}g`
  }
  
  function applyClass() {
    resultTxt.classList.add('resultTxt1');
  
  }
  
  function removeClass() {
    resultTxt.classList.remove('resultTxt1');
  }
  
  
  function calculaBasal() {
  
    let vresultado = 0;
  
    vresultado = 66 + (13.7 * +vpeso.value) + (5 * +valtura.value) - (6.8 * +vidade.value).toFixed(0);
    tmb.value = vresultado.toFixed(0) 
  
  }

  
  
  
  
  
  
  
  
  
  
  