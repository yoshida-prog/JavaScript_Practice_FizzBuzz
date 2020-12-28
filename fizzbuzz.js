function addElement(fb, forb){
  const newP = document.createElement("p");
  newP.innerHTML = fb + "," + forb;
  document.getElementById("fizzbuzzBox").appendChild(newP);
}

function documentReset(){
  const element = document.getElementById("fizzbuzzBox");
  while (element.firstChild){
    element.removeChild(element.firstChild);
  }
}

function fizzbuzz(){
  documentReset();
  let fizz = form.fizz.value;
  let buzz = form.buzz.value;
  if(fizz.match(/[0-9]{1,2}/g) == fizz && buzz.match(/[0-9]{1,2}/g) == buzz){
    fizz = Number(fizz);
    buzz = Number(buzz);
    let flug = 0;
    initialFizz = fizz;
    initialBuzz = buzz;
    function fizz_plus(){
      fizz = fizz + initialFizz;
    }
    function buzz_plus(){
      buzz = buzz + initialBuzz;
    }
    for(i=1; i<100; i++){
      if(i%fizz == 0 && i%buzz == 0){
        addElement(fizz, "fizzbuzz");
        fizz_plus();
        buzz_plus();
      }else if(i%fizz == 0){
        addElement(fizz, "fizz");
        fizz_plus();
      }else if(i%buzz == 0){
        addElement(buzz, "buzz");
        buzz_plus();
      }
    }
  }else{
    alert("2桁以下の自然数で入力してください");
    form.fizz.value = "";
    form.buzz.value = "";
  }
}
