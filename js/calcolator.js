function inputValue(number){
   document.querySelector('.textAria').value = document.querySelector('.textAria').value+ number
}
function equal(){
   let equalValue = document.querySelector('.textAria').value;
   if(equalValue){
      document.querySelector('.textAria').value = eval(document.querySelector('.textAria').value)
   }
}
function clean(){
   document.querySelector('.textAria').value = '';
}