function longestSubstring(s){
    let longest=0;
    let start=0;
    let seen=new Map();

    for(let end=0;end <s.length;end++){
        let char=s[end];
        if(seen.has(char)){
            start=Math.max(start, seen.get(char)+1);
        }
        seen.set(char,end);
        longest=Math.max(longest,end-start+1);
    }
    return longest;
}

console.log(longestSubstring("pwwkew"));