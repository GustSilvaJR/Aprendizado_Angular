import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public cadastroForm: FormGroup = this.formBuilder.group({
    firstName: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  public teste(){
    console.log(this.cadastroForm);
  }

}
