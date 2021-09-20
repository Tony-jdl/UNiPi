/* 
5 - unique
Scrivere una funzione Typescript "unique(a, equals)" che utilizza generics. La funzione
prende come parametro un array "a" di oggetti di tipo "T" e una funzione "equals(T,T)" che
confronta due oggetti di tipo T, restituendo true se sono uguali. La funzione "unique"
restituisce un nuovo array contenente tutti gli elementi unici di "a" (quindi senza duplicati),
nell'ordine in cui sono in "a". Nota: la funzione equals non va implementata, viene specificata
dall'utilizzatore della funzione.
Esempio:
unique<number>([3,5,3,2,8,5],((x,y)=>x==y)) → [3,5,2,8]
unique<number>([0,0,0,0,0,0,0],((x,y)=>x==y)) → [ 0 ]
unique<string>(['hello','hello', 'how','are','you'],((x,y)=>x==y)) → [ 'hello', 'how', 'are', 'you' ]
 */

function unique<T> (a:T[], equals:(c:T, d:T) => boolean){
    var res:[] = [];
    for(var i in a){
        if(!a.equals(a[i],a[i+1])){
            res.push()
        }
    }
}

/* 
6 - car
Scrivere in Typescript una classe Car che rappresenta un automobile. La classe ha le seguenti proprietà:
● fuelType, rappresenta il tipo di carburante, di tipo Fuel definito dal seguente enum (che trovate anche nel REPL): enum Fuel {Diesel, Gasoline, Electric};
● fuelCapacity, di tipo numerico, rappresenta la capacità massima del serbatoio o batteria;
● consumption, di tipo numerico, rappresenta il consumo medio, in unità di carburante per km;
● fuelLevel, di tipo numerico, rappresenta il livello del carburante rimanente nel serbatoio, o il livello della batteria. Prende valori tra 0 e fuelCapacity.
La classe contiene un costruttore che prende come parametri, nell'ordine: fuelType, fuelCapacity, consumption e fuelLevel. I primi tre parametri sono obbligatori,
invece fuelLevel può mancare e ha 0 come valore di default.

La classe implementa anche i seguenti metodi (usate ESATTAMENTE i nomi indicati):
● refillFuel(f) - prende come parametro una quantità di carburante/energia f e aggiorna la proprietà fuelLevel, incrementandola del valore f; attenzione a
rispettare la capacità massima del serbatoio/batteria (specificata dalla proprietà fuelCapacity): se la capacità è superata, fuelLevel viene settato a
fuelCapacity. Il parametro f è opzionale: se non viene specificato il metodo fa il 'pieno', portando il valore di fuelLevel al valore massimo possibile (cioè alla
capacità massima). Il metodo restituisce il nuovo livello di carburante/energia.
● drive (km) - prende come parametro il numero di km da percorrere, e aggiorna fuelLevel considerando il consumo medio; la funzione restituisce il nuovo
valore di fuelLevel. Se il livello di carburante non è sufficiente per completare il viaggio, si lancia un'eccezione di tipo NoFuelException. In caso di eccezione
il livello del carburante non viene modificato.

Esempio:
let c1=new Car(Fuel.Diesel,30,0.5) -> Car { fuelType: 0, fuelCapacity: 30, consumption: 0.5, fuelLevel: 0 }
c1.drive(10) → lancia eccezione NoFuelException();
c1.refillFuel(20); → 20
c1.drive(10); → 15
c1.drive(30); → 0
c1.refillFuel(); → 30
*/

enum Fuel {Diesel, Gasoline, Electric};
class NoFuelException extends Error {}

class Car{
    fuelType: Fuel; //tipo carburante
    fuelCapacity: number; //capacità massima serbatoio o batteria
    consumption: number; //consumo medio
    fuelLevel: number; //livello carburante o batteria
    constructor(fuelType: Fuel, fuelCapacity: number, consumption: number, fuelLevel: number = 0){ 
      this.fuelType = fuelType;
      this.fuelCapacity = fuelCapacity;
      this.consumption = consumption;
      this.fuelLevel = fuelLevel;
     }

    refillFuel(f){
        if( (this.fuelLevel + f) > this.fuelCapacity) this.fuelLevel = this.fuelCapacity;
        if(f == undefined) this.fuelLevel = this.fuelCapacity;
        this.fuelLevel+=f;
        return this.fuelLevel;
    }

    drive(km){
        let newLevFuel: number = this.fuelLevel + (km * this.consumption)
        if(newLevFuel <= 0) throw new NoFuelException('NoFuelException');
        this.fuelLevel = newLevFuel;
        return this.fuelLevel;
    }    
}