import { Observable, from } from "rxjs";

const numbers = [1, 5, 10];
const source = from(numbers);

const myObserver = {
    next: (x:number) => console.log(x),
    error: (e: Error) => console.log(e),
    complete: () => console.log("Observable finalizado")
}

class AlternativeObserver {
    next(x:number) {
        console.log(x);
    };
    
    error(e:Error) {
        console.log(e);
    };
    
    complete() {
        console.log("Observable alternativo finalizado!");
    };
}

const sourceInstance = new Observable(subscriber => {
    for(let n of numbers){
        if(n>5){
            subscriber.error("Aconteceu algum problema!");
        }
        subscriber.next(n);
    }
    subscriber.complete();
});



function component() {
  source.subscribe(myObserver);

  source.subscribe(new AlternativeObserver);

  sourceInstance.subscribe(myObserver);
}

component(); 