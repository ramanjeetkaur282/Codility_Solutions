/* Given a number n (1 <= n <= 10^10), the task is to find all the possible sequences of successive
positive integer numbers (p. p+1, ..., p+m) that satisfy the equation: n = p^2 + (p+1)*2 + ... +
(p+m)^2.
Input
The input consists of a single integer n.
Output
The output is an array of strings consisting of two parts. The first element should display the total number of possible sequences, denoted as k. The following k elements should contain the descriptions of the sequences. Each element is a string starts with the count of numbers in the corresponding sequence, denoted as c, followed by c integers representing the successive positive integer numbers, seperated by a space. These k elements should be ordered in descending order of C.
Sample Input
2030
Sample Output
["2",4 21 22 23 24",”3 25 26 27”] */

function consecutiveSequence(n){
    let result=[];

    /*Iterate over possible starting points for sequence. Loop through possible starting values
      of p from 1 to Math.sqrt(n) because the sum of squares grows quickly, and going beyond the square
      root would cause the sum to exceed n too soon
    */
    for(let p=1;p<=Math.sqrt(n);p++){
      console.log("Math Sqrt", Math.sqrt(n));
    /* For each p, we start with sum of 0 and add the squares of the next integers one by one.
    keep track of the sequence length m as well. */ 
        let sumSquares=0;
        let m=0;

        //Keep adding squares until the sum exceeds n
        while(sumSquares < n){
            sumSquares += Math.pow(p+m,2);
            console.log("Sum Square", sumSquares,p,m);
            /* If the sum of squares equals n, we collect the sequence of integers
            from p to p+m and store it as a string*/
            if(sumSquares === n){
                let sequence=[];
                for(let i=0;i<=m;i++){
                    sequence.push(p+i);
                }
                result.push(`${sequence.length} ${sequence.join(" ")}`);
            }
            m++;
        }
    }

    // Sort the result by the number of terms in descending order so longer sequence comes first.
    result.sort((a,b)=>{
        let A=parseInt(a.split(' ')[0]);
        let B=parseInt(b.split(' ')[0]);

        return B-A;  
    });

    return [result.length.toString()].concat(result);   
}

console.log(consecutiveSequence(100));