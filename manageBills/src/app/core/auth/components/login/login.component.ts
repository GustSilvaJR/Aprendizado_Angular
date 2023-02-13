import { Component } from '@angular/core';

import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  constructor(private formBuilder: FormBuilder){}

  loginForm = this.formBuilder.group({
    email: ['', Validators.required, Validators.email],
    password: ['', Validators.required],
  })

  public sendForm():void{
    console.log("Formulário enviado: ");
    console.log(this.loginForm.value);
  }

  public teste():void{
    console.log(this.loginForm.get('email')?.valid);
    console.log("Deu certo");
  }
}
