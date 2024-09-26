function leftRotateArray(arr,k){
    k=k%arr.length;

    return [...arr.slice(k),...arr.slice(0,k)]
}

console.log(leftRotateArray([1,2,4,5,7],3));