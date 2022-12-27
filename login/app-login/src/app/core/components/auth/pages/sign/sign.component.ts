import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { throwError } from 'rxjs';

//Services
import { AuthService } from 'src/app/core/components/auth/services/auth.service';


@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {

  public msgError:string ='';

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  public form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  ngOnInit(): void {
  }

  public submitForm(): any {
    if (this.form.valid) {
      this.authService.sign({
        email: this.form.value.email,
        password: this.form.value.password
      }).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err:Error) => {
          this.msgError = err.message;
        }
      })
    }
  }

}
