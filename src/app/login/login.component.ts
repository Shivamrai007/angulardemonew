import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email:string="";
  password:string="";
  date = new Date();

  constructor(private route:ActivatedRoute,private router:Router,
    private userService:UserService) { }

  ngOnInit(): void {
  }

  onLogin(){
    this.router.navigate(['/ViewAll']);
  }

  checkEmail(event:any){
    console.log(event.target.value);
  }

  checkPassword(event:any){
    console.log(event.target.value);
  }

}
