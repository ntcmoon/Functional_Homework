let arr = [1,2,3,4,5,6,7,8,9,10];
    const result = arr.filter  ( number => { 
        return (number%2)==0 ;
    }) .map((number) => number * 1000);
    console.log(result)

    