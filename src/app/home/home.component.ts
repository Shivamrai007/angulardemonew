import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router,
    private userService: UserService) { }

  firstname: string = "";
  lastname: string = "";
  email: string = "";
  role: string = "";
  date: string = "";
  password: string = "";
  address: {
    country: string,
    state: string,
    city: string
  }

  user: User;
  public backgroundcolor = "text-danger";

  isDisabled = false;
  public save = "";
  public success = "text-danger";
  registered: string = "";
  isFormSubmitted = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.isDisabled = true;
    }, 5000);
    this.userService.fetchUser();
  }

  onClick = () => {
    this.save = "Details Saved Successfully!!!"
  }

  onChangeUsername = (event: any) => {
    console.log("username is => " + event.target.value);
  }

  onChangePlayer = (event: any) => {
    console.log("Favourite Player is => " + event.target.value);
  }


  onChangeFname = (event: any) => {
    console.log("First Name is => " + event.target.value);
  }

  onChangeLname = (event: any) => {
    console.log("Last name is => " + event.target.value);
  }

  onChangeTeam = (event: any) => {
    console.log("Favourite Book is => " + event.target.value);
  }

  onChangeRegion = (event: any) => {
    console.log("You belong from  => " + event.target.value);
  }

  onChangeDate = (event: any) => {
    console.log("Your DOB is  => " + event.target.value);
  }

  onClickAll = (fname, lname, username, region, DOB) => {
    this.registered = "You Have been Successfully Registered!!";
    //this.registerService.printdata(fname, lname, username, player, team, region, DOB);
    console.log("His name is " + fname + " "
      + lname + "\n and his mail is " + username +
      "\n he is from " + region +
      "\n His DOB is " + DOB);
  }

  onSubmit(form) {
    this.user = {
      firstName: form.value.FirstName,
      lastName: form.value.LastName,
      email: form.value.email,
      book: form.value.Book,
      role: form.value.Region,
      dob: form.value.Date,
      country: form.value.country,
      state: form.value.state,
      city: form.value.city
    }
    console.log(this.user.firstName+" "+this.user.lastName)
    this.isFormSubmitted = true;
    console.log(form.value);
    this.userService.postUser(this.user);
    this.router.navigate(['login']);
  };

  @HostListener("hover") mouseHover(event: any) {
    this.backgroundcolor = "blue";
  }

  hover = (event: any) => {
    this.backgroundcolor = "text-success";
    console.log("over");
  }

  out = (event: any) => {
    this.backgroundcolor = "text-danger";
    console.log("out");
  }

}
