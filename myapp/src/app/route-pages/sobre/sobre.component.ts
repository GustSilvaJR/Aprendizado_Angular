import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next:res => console.log(res),
      error:err => console.log(err)   
    });

    this.activatedRoute.queryParams.subscribe({
      next:res => console.log(res),
      error:err => console.log(err)   
    });
  };

}
