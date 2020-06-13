import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../pages/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-loyout',
  templateUrl: './loyout.component.html',
  styleUrls: ['./loyout.component.scss'],
})
export class LoyoutComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }
  logout(event: Event) {
   event.preventDefault();
   this.auth.logout();
   this.router.navigate(['/admin', 'login']);
  }

}
