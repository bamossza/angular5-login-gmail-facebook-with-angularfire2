import {Router} from '@angular/router';
import {Component} from '@angular/core';
import * as firebase from 'firebase/app';
import {AngularFireAuth} from 'angularfire2/auth';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';

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
        this.afAuth.auth
            .signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .then(resp => {
                if (resp.user.email !== '') {
                    this.router.navigate(['/admin/dashboard']);
                }
            })
            .catch(error => {
                console.log(error);
                alert(error.message);
                this.router.navigate(['/login']);
            });
    }

    loginByFacebook() {
        this.afAuth.auth
            .signInWithPopup(new firebase.auth.FacebookAuthProvider())
            .then(resp => {
                if (resp.user.email !== '') {
                    this.router.navigate(['/admin/dashboard']);
                }
            })
            .catch(error => {
                console.log(error);
                alert(error.message);
                this.router.navigate(['/login']);
            });
    }

    logout() {
        this.afAuth.auth.signOut().then(() => {
            this.router.navigate(['/login']);
        });
    }
}
