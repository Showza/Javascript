//Recursividade
function fatorial(n){
    if (n ==1){
        return 1
    } else {
        return n * fatorial(n-1)
    }

}

console.log(fatorial(5))

/*
Fatorial de 5 é:
5! = 5 x 4 x 3 x 2 x 1

Logo o fatorial de 5 é igual a 5 x o fatorial de 4:
5! = 5 x 4! 

Logo, o fatorial de um número é o número multiplicado pelo fatorial do número -1:
n! = n * (n-1)!

O fatorial de 1 é igual a 1
1! = 1

*/
