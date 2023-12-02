import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ApiService } from '../../servicios/api/api.service';
import { LoginI } from '../../modelo/login.interface';

import { Router } from '@angular/router'; 
import { responseI } from '../../modelo/response.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  loginForm = new FormGroup({
    usuario : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  })

  constructor(private api:ApiService, private router:Router){

  }

  errorStatues:boolean = false;
  errorMsj:any= "";




  ngOnInit(): void {
    
    this.checkLocalStorage();
  }

  checkLocalStorage(){
    if(localStorage.getItem('token')){
      this.router.navigate(['Medicamentos']);
    }
  }

  onLogin(form:LoginI){
    this.api.loginByEmail(form).subscribe(data=>{
      let dataResponse:responseI = data;
      if(dataResponse.status == "ok"){
        localStorage.setItem("token",dataResponse.result.token);
        this.router.navigate(['Medicamentos']);

      }
      else {
        this.errorStatues = true;
        this.errorMsj = dataResponse.result.error_msg;
      }
    })
  }

}
