function lexico(n){
    let result=[];

    function dfs(curr){
        if(curr > n) return;
        result.push(curr);
        for(let i=0;i<=9;i++){
            let next_num=curr*10+i;
            if(next_num > n) break;
            dfs(next_num);
        }
    }

    for(let i=1;i<=9;i++){
        if(i>n) break;
        dfs(i);
    }

    return result;
}

console.log(lexico(15));