import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public afAuth: AngularFireAuth, private router: Router) {
  }
  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then((resp) => {
      if (resp.user.email !== '') {
        this.router.navigate(['/admin/dashboard']);
      }
    })
    .catch((error) => {
      console.log(error);
      this.router.navigate(['/login']);
    });
  }
  logout() {
    this.router.navigate(['/login']);
    this.afAuth.auth.signOut();
  }
}
