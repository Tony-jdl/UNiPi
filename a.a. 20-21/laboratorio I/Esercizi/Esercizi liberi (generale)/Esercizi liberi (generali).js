/* Tokenizza
Si deve scrivere una funzione JS tokenizza(s), dove s è una stringa che rappresenta un programma in
QuasiJS, dove è obbligatorio separare le istruzioni con il carattere speciale @!
Quindi, la stringa è composta da una serie di istruzioni tutte separate da @ (e @ può essere utilizzato
SOLO come separatore di istruzioni.
La funzione deve restituire un oggetto Array() contenente tutte le istruzioni del programma s
Esempi
Sia s = “const pi = 3.14 @\nwhile (var i = 0; i< pi+15; i++) {i++} @ return ”
tokenizza(s) -> [
 'const pi = 3.14 ',
 '\nwhile (var i = 0; i< pi+15; i++) {i++} ',
 ' return '
] */

function tokenizza(s){
    var a=[];
    for(var i of s)
        if(i == "@") a.push(s.splice(0,i))
    return a;
}