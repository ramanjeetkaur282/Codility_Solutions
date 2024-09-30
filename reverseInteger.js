function reverseInteger(x){
    const MAX_INT=2**31-1;
    const MIN_INT=-(2**31-1);

    let result=0;

    while(x !== 0){
        let pop=x%10;
        x=parseInt(x/10);

        if( result > Math.floor(MAX_INT/10) || 
        (result === Math.floor(MAX_INT/10) && pop > 7)){
            return 0;
        }
        if( result < Math.ceil(MIN_INT/10) || (result === Math.ceil(MIN_INT/10) && pop < -8)){
            return 0;
        }

        result=result*10+pop;
    }
   return result;
}

console.log(reverseInteger(123));