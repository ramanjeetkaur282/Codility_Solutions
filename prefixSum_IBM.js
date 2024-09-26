/* Given an array of integers, return the maximum number of positive prefix sums that can be achieved by permuting the array. 
In other words, consider all permutations of the array, compute the prefix sums for each permutation and return the maximum 
number of positive prefix sums possible.

Example Testcase: [1,2,3,-2]
step 1: [3,2,1,-2]
step 2: let prefixSum=0, Count=0;
Expected Output: 4 */


function prefixSum(arr){
    arr.sort((a,b)=>b-a); //descending Order

    let prefixSum=0;
    let count=0;

    for(let i=0;i<arr.length;i++){
        prefixSum += arr[i];
        if(prefixSum > 0){
            count++;
        }
        else{
            break;
        }
    }

    return count;
}

console.log(prefixSum([1,2,3,-2]));

