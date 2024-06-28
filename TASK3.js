let majmoo=0;
function freeShipping(ex){
    let input = ex;
    let x= Object.values(input);
    for(let i=0;i<x.length;i++){
        majmoo+=x[i]
    };
    if(majmoo>='50'){
        console.log('true');
    }else{
        console.log('false')
    }
}