import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../users.service';
import { UserModel } from 'src/app/models/users.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private usersService: UsersService,
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    form.form.markAllAsTouched();
    if (form.invalid) {
      alert('Campos incorrectos');
      return;
    }

    this.usersService.registerUser(form.value)
      .subscribe(
        response => {
          this.setSessionStorage(response);
        },
        error => {
          alert('Error: ' + error);
          console.log(error);
        },
      );
  }

  async onSubmitAsync(form: NgForm) {
    form.form.markAllAsTouched();
    if (form.invalid) {
      alert('Campos incorrectos');
      return;
    }

    try {
      const response = await this.usersService.registerUser(form.value).toPromise();
      this.setSessionStorage(response);
    } catch (error) {
      alert('Error: ' + error);
    }
  }

  onSubmitPromise(form: NgForm) {
    form.form.markAllAsTouched();
    if (form.invalid) {
      alert('Campos incorrectos');
      return;
    }

    this.usersService.registerUser(form.value)
      .toPromise()
      .then(response => {
        this.setSessionStorage(response);
      })
      .catch(error => {
        alert('Error: ' + error);
        console.log(error);
      });
  }

  private setSessionStorage(response: UserModel): void {
    sessionStorage.setItem('userData', JSON.stringify(response));
  }
}
