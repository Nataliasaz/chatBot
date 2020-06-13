import {Component, OnInit} from '@angular/core';
import { NbLoginComponent } from '@nebular/auth';
import {User} from '../../pages/interface';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../pages/services/auth.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  message: string;
  constructor(
    public auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }
  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      if (params['loginAgain']) {
        this.message = 'Пожалуйста, авторизуйтесь';
      }
    });
    this.form = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
    this.submitted = true;
    const user: User = {
      username: this.form.value.username,
      password: this.form.value.password,
    };
    this.auth.login(user).subscribe(() => {
      this.form.reset();
      this.router.navigate(['/admin', 'charts', 'echarts']);
      this.submitted = false;
    }, () => {
      this.submitted = false;
    });
  }
}
