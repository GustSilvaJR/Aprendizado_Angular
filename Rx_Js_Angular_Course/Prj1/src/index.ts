import { Observable, from, fromEvent } from "rxjs";
import { delay, map, filter } from "rxjs/operators";
import Request from "./request";

const req = new Request();
interface mouseTrack {
    x: number;
    y: number;
}

let circle = document.getElementById("circle");

let source = fromEvent(document, 'mousemove').pipe(
    map((e: MouseEvent) => {
        return {x: e.clientX, y: e.clientY}
    }),
    filter((value: mouseTrack) => value.x < 500),
    delay(100)
)

function onNext(value: mouseTrack){
    console.log(value);

    circle.style.left = `${value.x}px`;
    circle.style.top = `${value.y}px`;
}

source.subscribe({
    next: (value:mouseTrack) => onNext(value),
    error: (e:Error) => console.log(e),
    complete: () => console.log("Finalizado")
})

req.click.subscribe({
    next: () => req.load('../movies.json'),
    error: (e: Error) => console.log(e),
    complete: () => console.log("Fim")
})
