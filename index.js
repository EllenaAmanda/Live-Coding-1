// let array = [8 ,3 ,9 ,2 ,5]
// let input = 3;

function cariAngka(arrNum, input){
    for (let i=0; i < arrNum.length; i++){
        
        if(arrNum[i] === input){
            // console.log(input)    
            return input
        }
    }
}

console.log(cariAngka([8 ,3 ,9 ,2 ,5], 3))
