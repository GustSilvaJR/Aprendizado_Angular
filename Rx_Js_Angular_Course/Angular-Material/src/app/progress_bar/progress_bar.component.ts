import { Component, OnInit } from '@angular/core';
import { interval, takeWhile, map, concat, take, tap} from 'rxjs';

enum ModeChallenge{
  Determinate = 'determinate',
  Query  = 'query',
}

@Component({
  selector: 'app-progress_bar',
  templateUrl: './progress_bar.component.html',
  styleUrls: ['./progress_bar.component.css']
})
export class Progress_barComponent implements OnInit {



  public progress_bar = 0;
  public progress_bar_challenge = 0;
  public mode_challenge:ModeChallenge = ModeChallenge.Query;
  public progress_bar_buffer = 0;
  public progress_bar_buffer_spectrall = 0;

  constructor() { }

  ngOnInit() {
    this.loadingProgress(1000).subscribe((speed) => this.progress_bar = speed);

    concat(
      interval(2000).pipe(
        take(1),
        tap(() => this.mode_challenge = ModeChallenge.Determinate)
      ),
        this.loadingProgress(400)
    ).subscribe(i => this.progress_bar_challenge = i*5)

    this.loadingProgressBuffer(500).subscribe({
      next: (speed) => {
          this.progress_bar_buffer = speed;
        }
      })

      this.loadingProgressBufferSpectrall(100).subscribe({
        next: (speed) => {
            this.progress_bar_buffer_spectrall = speed;
          }
        })


  }

  loadingProgress(speed:number){
    return interval(speed).pipe()
  }

  loadingProgressChallenge(speed:number){
    return interval(speed)
  }

  loadingProgressBuffer(speed:number){
    return interval(speed)
    .pipe(
        takeWhile(() => this.progress_bar_challenge <= 100),
        map(() => this.progress_bar_challenge)
      )
  }

  loadingProgressBufferSpectrall(speed:number){
    return interval(speed).pipe()
  }

}
