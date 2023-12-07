import { Observable, from, fromEvent } from "rxjs";
import { delay, map, filter, switchMap } from "rxjs/operators";

interface Imovie {
    title:string;
};

export default class Request{

    public button = document.querySelector("#button");
    public output = document.querySelector("#output");
    
     click = fromEvent(this.button, 'click');
    
    public load(url:string): Observable<any>{

        return new Observable((subscriber) => {

            let xhr = new XMLHttpRequest();
        
            xhr.addEventListener('load', ()=>{
                let movies = JSON.parse(xhr.responseText);
        
                subscriber.next(movies);
                subscriber.complete();
                
            })
    
            xhr.open("GET", url);
            xhr.send();

        });

    }

    public renderMovie(movies:any) {
        movies.forEach((movie: Imovie) => {
            let div = document.createElement('div');
            div.innerText = movie.title;
            this.output.appendChild(div);
        })
    }

    this.click.pipe(switchMap(() => this.load('../movies;json'))).subscribe({
        next: this.renderMovie,
        error: (e:Error) => console.log(e),
        complete: () => console.log(),
    })

}
