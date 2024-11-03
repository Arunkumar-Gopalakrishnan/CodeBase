let array = [4, 5, 3, 2, 4, 1, 5];

function deduplicateAndSort(arr){
    let removeDuplicate = new Set(arr);
    console.log(removeDuplicate);
    let converToObject = [...removeDuplicate];
    converToObject.sort((a,b) => a - b);
    return converToObject;
}
console.log(deduplicateAndSort(array));
