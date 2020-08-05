var myArray = [6,1,8,2,3,6,3,2,5,6,8,8,6];

var numeroMayor;
var maximoRepeticiones=0;

function buscarRepeticiones(array){
    var numero;
    var repeticiones=0;
    for(i=0; i<array.length; i++){
        repeticiones = 0;
        numero = array[i];
        for(j=0+i; j<array.length; j++){
            if(numero === array[j]){
                repeticiones++;
            }
        }
        if(repeticiones > maximoRepeticiones){
            numeroMayor = numero;
            maximoRepeticiones = repeticiones;
        }
    }
}

buscarRepeticiones(myArray);
console.log("Numero: "+numeroMayor);
console.log("Repeticiones: "+maximoRepeticiones);