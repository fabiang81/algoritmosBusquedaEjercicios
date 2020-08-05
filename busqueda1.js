var myArray = [6,1,8,2,3,6,3,2,5,6,8,8,6,8,8];

var numeroMayor;
var maximoRepeticiones=0;

function buscarRepeticiones(array){
    var numero;
    var repeticiones=0;
    var aux=0;
    for(i=aux; i<array.length; i++){
        repeticiones = 0;
        numero = array[i];
        for(j=aux+i; j<array.length; j++){
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