// Question Number 22
function bubbleSort(array){

    for(let i = 0; i < array.length - 1; i++){
        for(let j = 0; j < array.length - 1 - i; j++){
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    return array;
}

console.log(bubbleSort([1, 2, 4, 8, 245, 94, 123, 84, 895, 678, 497, 2, 975, 1, 1454]));

