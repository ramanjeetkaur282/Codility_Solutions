
function shortestPalindrome(s){
    let reverseStr=s.split('').reverse().join('');
    console.log("Reverse String: ", reverseStr);
    let newStr= s +"#"+reverseStr;
    console.log("New String: ",newStr);

    const kmpTable=buildKMP(newStr);
    console.log("KMP: ",kmpTable);
    let longestPrefix=kmpTable[kmpTable.length-1];
    console.log("Longest Prefix: ",longestPrefix);
    console.log("result: ",reverseStr.substring(0,s.length-longestPrefix));

    return reverseStr.substring(0,s.length-longestPrefix)+s;
}

function buildKMP(s){
    const n=s.length;
    console.log("String Length: ",n);

    let table=new Array(n).fill(0);
    console.log("Table Array: ",table);

    let j=0;

    for(let i=1;i<n;i++){
        console.log("Values of s[i] and s[j]: ",s[i],s[j]);

        while(j>0 && s[i]!==s[j]){
            console.log("While Loop: ", table[j-1]);
            j=table[j-1];
        }
        if(s[i]===s[j]){
            j++;
        }
        table[i]=j;
    }
    return table;
}

console.log(shortestPalindrome("aacecaaa"));