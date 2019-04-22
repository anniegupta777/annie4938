import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() myForm: FormGroup;
  constructor(private router: Router) { }

  ngOnInit() {
    this.myForm = new FormGroup ({
     Email : new FormControl(null, [Validators.required]),
     Password : new FormControl(null, [Validators.required])
   });
  }
  onSubmit() {
    const email = this.myForm.get('Email').value;
    const password = this.myForm.get('Password').value;
    if (email === 'admin' && password === 'admin') {
      this.router.navigate(['/onBoardingForm']);
    } else {

      alert('Sorry wrong username or password');
    }
  }

  reset() {
    // tslint:disable-next-line:only-arrow-functions
    setTimeout( function() {
      window.location.reload();
  }, 500);

  }
}
