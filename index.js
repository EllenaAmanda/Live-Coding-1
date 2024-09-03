// let array = [8 ,3 ,9 ,2 ,5]
// let input = 3;

function cariAngka(arrNum, input){
    if(typeof input !== 'number' ){
        return "inputan harus number"
    }

    for (let i=0; i < arrNum.length; i++){
        if(arrNum[i] === input){
            // console.log(input)    
            return input
        }
    }
    
    return false
}

console.log(cariAngka([8 ,3 ,9 ,2 ,5], 3))
console.log(cariAngka([8 ,3 ,9 ,2 ,5], 1))
console.log(cariAngka([8 ,3 ,9 ,2 ,5], "h"))
