function forvalue (num){
    var inpu = document.getElementById("input")
    inpu.value += num
  }
  function calcu (){
    var inpu = document.getElementById("input")
    console.log (inpu.value)
    inpu.value = eval(inpu.value)
  }
  function clean (){
    var inpu = document.getElementById("input")
    inpu.value = " "
  }
  function minus (){
    var inpu = document.getElementById("input")
    inpu.value = inpu.value.slic(0,-1) 
  }