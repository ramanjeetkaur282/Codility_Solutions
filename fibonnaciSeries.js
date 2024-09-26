/* Dynamic Programming */

function fibonnaci(n){
    if(n<2) return n;

    let dp=new Array(n+1);
    dp[0]=0;
    dp[1]=1;

    for(let i=2;i<=n;i++){
       
        dp[i]=dp[i-1]+dp[i-2];
        console.log(dp[i]);
    }
   
    return dp[n];
}

console.log(fibonnaci(10));