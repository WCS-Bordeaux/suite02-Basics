/*

    3D array

    Ecrire une fonction "getValuesFrom3DArray", qui va mettre dans un tableau à une dimension chaque valeurs trouvé.

    Prototype:
        arr getValuesFrom3DArray(arr);

    Exemple:
        getValuesFrom3DArray([
            [
                ["Oulala", "ça", "fait"],
                ["beaucoup", "de", "crochets!!!"]
            ],
            [
                ["Pourtant c'est la même chose quasiment !"]
            ]
        ]);
        // ["Oulala", "ça", "fait", "beaucoup", "de", "crochets!!!", "Pourtant c'est la même chose quasiment !"]

*/

function getValuesFrom3DArray(arr) {
   var finalArr = [];
   for (let x = 0; x < arr.length; x++) {
      var layer = arr[x];
      for (let y = 0; y < layer.length; y++) {
         var layer2 = layer[y];
         for (let z = 0; z < layer2.length; z++) {
            finalArr.push(layer2[z]);
         }
      }
   } return finalArr;
}