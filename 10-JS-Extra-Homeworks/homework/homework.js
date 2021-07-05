// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  
  var array = [];
  var matriz=[];
  for (let clave in objeto){
    array.push(clave);
    array.push(objeto[clave]);
    matriz.push(array);
    array = [];
}
  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

 var obj ={};
  var guia ='abcdefghijklmnñopqrstuvwxyz';
  for(i=0; i<26;i++){
    for(var j=0;j<=string.length;j++){
      if(guia.charAt(i)==string.charAt(j)){
        if(obj[guia.charAt(i)]!=null){
        obj[guia.charAt(i)] = obj[guia.charAt(i)] + 1;
        }else{
          obj[guia.charAt(i)]=1;
        }
      }
    }
  }
  return obj;
}


  



function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  var mayus = s;
  mayus = mayus.toUpperCase();
  var cont=0;
  var contenedor = '';
  var conte='';
  for(var i=0; i<s.length;i++){
    if(s.charAt(i)===mayus.charAt(i)){
      contenedor = contenedor +mayus.charAt(i);
      cont = cont +1;
    }else{
      conte = conte + s.charAt(i);
    }
  }
  contenedor = contenedor + conte;
  return contenedor;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  var string = '';
  var enroque ='';
  var contenedor = '';
  for(var i=0;i<=str.length;i++){
    if(str.charAt(i)!=' ' && i<str.length){
      string = string +str.charAt(i);
    }else{
      var j=string.length;
      for(j;j>=0 ;j--){
        enroque = enroque + string.charAt(j);
      }
      if(i<str.length){
        contenedor = contenedor + enroque + ' ';
        string ='';
        enroque = '';
      }else{
        contenedor = contenedor + enroque ;
      }
    }
  }
  return contenedor;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  var num = numero.toString()
  var compara1='';
  var compara2='';
  for(var i=0;i<=num.length;i++){
    if(i< ((num.length-1)/2)){
      compara1 = compara1 + num.charAt(i);
    }else {
      if( i >((num.length-1)/2)){
        compara2 =compara2 +num.charAt(i);
      }
    }
  }
  var container='';
  var i = compara2.length;
  for(i ;i>=0;i--){
    container = container + compara2.charAt(i);
  }
  if(container==compara1){
    return 'Es capicua';
  }else{
    return 'No es capicua';
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  var string ='';
  var cont = 0;
  for(var i =0;i<cadena.length;i++){
    if(cadena.charAt(i)==='a'||cadena.charAt(i)==='b'||cadena.charAt(i)==='c'){
      cont = cont +1;
    }else{
      string = string +cadena.charAt(i);
    }
  }
  return string;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  var array ='';
  for(var i =0;i<arr.length-1;i++){
    for(var j=i ; j<arr.length-1;j++){
      if(arr[j].length>arr[j+1].length){
        array = arr[j+1];
        arr[j+1]=arr[j];
        arr[j]= array;
      }
    }
  }
return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  var array =[];
  for(var i=0;i<arreglo1.length;i++){
    for(var j=0;j<arreglo2.length;j++){
      if(arreglo1[i]===arreglo2[j]){
        array.push(arreglo1[i]); 
      }
    }
  }
  return array;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

