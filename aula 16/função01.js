function parimp(n){
    if (n%2==0){
        return 'Par'
    } else {
        return 'Ímpar'
    }
}

let res = parimp(5)

console.log(`O número 5 é ${res}`)