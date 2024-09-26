function rotateArray(arr,k){
    // let n=arr.length;
    //  k%=n;

    //  const reverse=(i,j)=>{
    //     while(i<j){
    //         let temp=arr[i];
    //         arr[i]=arr[j];
    //         arr[j]=temp;
    //         i++;
    //         j--;
    //     }
    //  }

    //  reverse(0,n-1);
    //  reverse(0,k-1);
    //  reverse(k,n-1);

    //  return arr;
    return [...arr.slice(-k%arr.length),...arr.slice(0,-k%arr.length)];
}

console.log(rotateArray([31,29,43,84,75],8));

//Reversing the array takes O(n)