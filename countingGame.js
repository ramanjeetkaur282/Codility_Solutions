/* The counting game is a widely popular casual game. Every participant in the game must count numbers in sequence. However, if the next number to be called is a multiple of 7, or if the next number contains the digit 7, then that number must be skipped, otherwise, you lose the game.
Rose and Zack play this game and find it too easy, so they decide to modify some rules: for any number containing the digit 7, all its multiples cannot be called either!
For example, if Rose calls out 6, since 7 cannot be called, Zack must call 8 next. If Rose calls out 33, since 34 is 17 times 2 and 35 is 7 times 5, Zack's next possible call is 36. If Rose calls out 69, because numbers 70 to 79 all contain the digit 7, Zack's next call must be 80.
Input Format
Input a line which contains a positive integer x, indicating the number called by Rose this time.
Output Format
Output a lines which contains an integer. If the number called by Rose this time is invalid (cannot be called), output -1. Otherwise, output the number that Zack should call next.
Sample Input 1
6
Sample Output 1
8
Sample Input 2
33
Sample Output 2
36
Sample input 3:
300
Sample output 3:
-1 */

function countingGame(X){

    const containsSeven=(num)=> num.toString().includes('7');
    console.log(containsSeven(X));

    const isMutlipleOfSeven=(num)=>{
        for(let i=0;i<=num;i++){
            if(containsSeven(i) && num%i===0){
                return true;
            }     
        }
        return false;
    }
 if(containsSeven(X) || X%7 ===0){
    return -1;
 }

 let next=X+1;
 while(true){
    if(!containsSeven(next) && next%7!== 0 && !isMutlipleOfSeven(next)){
        return next;
    }
    next++;
 }

}

console.log(countingGame(38))