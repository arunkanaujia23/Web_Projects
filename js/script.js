Counter = document.getElementById('counter');
Show = document.getElementById('show');
Show2 = document.getElementById('show2');



Counter.addEventListener( 'input', (e) => {
   value = e.target.value;
   
   L = value.length
   trim = value.trim();
   split = trim.split(/\s+/).filter((item) => item).length
   
   Show.innerHTML = 'Total Characters: ' + L;
   Show2.innerHTML = 'Total Words: ' + split;
  
  
})



Show.innerHTML = 'Total Characters: 0' ;
Show2.innerHTML = 'Total Words: 0';