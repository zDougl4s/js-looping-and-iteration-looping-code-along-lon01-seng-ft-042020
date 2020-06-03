// Code your solutions in this file


function writeCards(arr, event) {
    let array = []
    for (let i = 0; i < arr.length;i++){
        array.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`);
    }
return array;

}


function countDown(times) {
while (times >= 0){
    console.log(times);
    times -= 1;
}


}