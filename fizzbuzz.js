let startBtn = document.getElementById('fbBtn');

startBtn.addEventListener('click', function(){
  fizzbuzz();
}, false);

function addElement(fb, forb){
  let fizzbuzzBox = document.getElementById('fizzbuzzBox');
  let content = fb + ',' + forb;
  const newP = document.createElement('p');
  const newContent = document.createTextNode(content);
  fizzbuzzBox.appendChild(newP).appendChild(newContent);
}

function documentReset(){
  const element = document.getElementById('fizzbuzzBox');
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
    for(let i=1; i<100; i++){
      if(i%fizz === 0 && i%buzz === 0){
        addElement(i, 'fizzbuzz');
      }else if(i%fizz === 0){
        addElement(i, 'fizz');
      }else if(i%buzz === 0){
        addElement(i, 'buzz');
      }
    }
  }else{
    alert('2桁以下の自然数で入力してください');
    form.fizz.value = '';
    form.buzz.value = '';
  }
}

