function UpdateCalculation(value){
  calculation+=value;
  display();
}

function display(){
  document.querySelector('.calc').value=calculation;//selects inputbox-.value(set value inside input)
}

function key(){
  if(event.key){
    select();
  }
}
function select(){
  let inputElement=document.querySelector('.calc');//get input box
  let name = inputElement.value;//read what usertype
  calculation=name;//store in calculation
  display();
}

  let calculation =localStorage.getItem('calculation')||'';