// comece a criar a sua função add na linha abaixo
function add(a,b){
    let soma = a+b;
    return soma;
  }
  

// descomente a linha seguinte para testar sua função
 console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply(a,b){
    let multiplicacao = 0;
    for(i=0;i<a;i++){
    multiplicacao +=  add(b,0)
    }
     return multiplicacao;
  }

// descomente a linha seguinte para testar sua função
 console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power(x,n){
    let expo = x
    let i = 1
    while(i != n){
    expo = multiply(expo,x)
     i++;
    }
    return  expo;
    
  }

// descomente a linha seguinte para testar sua função
 console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial(a){
    if (a == 0 || a == 1){
     return 1;
    }
  
   else{
    let expo = a
   let i = 1
   while(i != a){
   expo = multiply(expo,i)
    i++;
   }
     return expo;
 }
 }

// descomente a linha seguinte para testar sua função
 console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci
function fibonacci(a){
    let fibo=[0,1]
    let j = 1;
    for(i=0;i<=a;i++){
        fibo.push(add(fibo[i],fibo[j]))
        j++;
     }
     return fibo[a];
   }
   
// descomente a linha seguinte para testar sua função
 console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');


  
  
  
  
  
 
