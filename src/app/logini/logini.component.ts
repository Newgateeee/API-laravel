import { LoginService } from './../login.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logini',
  templateUrl: './logini.component.html'
})
export class LoginiComponent {
  usuario: string = '';
  pass: string = '';
  errorMessage: string = '';

  constructor(private loginService: LoginService, private router: Router) { }

  // onLogin(): void {
  //   this.loginService.login(this.usuario, this.pass).subscribe(
  //     response => {
  //       localStorage.setItem('token', response.access_token);
  //       this.router.navigate(['/menu']);
  //     },
  //     error => {
  //       this.errorMessage = error;
  //     }
  //   );
  // }
}
