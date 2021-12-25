import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:string = "";
  senha:string = "";
  constructor(
    private route: Router,
  ) { }

  ngOnInit(): void {
  }

  fazerLogin() {
     if(this.user == "gabizinha123" && this.senha == "love123") {
      this.route.navigate(['/home'])
    } else {
      Swal.fire('Ops!', 'Usuário ou senha incorretos', 'error')
    }
  }

}
