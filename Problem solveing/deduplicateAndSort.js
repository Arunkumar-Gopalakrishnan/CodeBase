let array = [4, 5, 3, 2, 4, 1, 5];
let array2 = [22,333,444];

function deduplicateAndSort(arr){
    let removeDuplicate = new Set(arr);
    console.log(removeDuplicate);
    let converToArray = [...removeDuplicate];
    console.log(converToArray);
    converToObject.sort((a,b) => a - b);
    return converToObject;
}

console.log(deduplicateAndSort(array));
    