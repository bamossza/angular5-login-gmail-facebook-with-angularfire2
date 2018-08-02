import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {firebaseConfig} from '../environments/firebase.config';

import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';

import {AppComponent} from './app.component';
import {DashboardComponent} from './admin/dashboard/dashboard.component';

const appRoutes: Routes = [
    {path: '', component: AppComponent},
    {path: 'login', component: AppComponent},
    {path: 'admin/dashboard', component: DashboardComponent},
    // {path: '**', redirectTo: 'login'}
];

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent
    ],
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(firebaseConfig, 'auth'), // imports firebase/app needed for everything
        AngularFirestoreModule, // imports firebase/firestore, only needed for database features
        AngularFireAuthModule, // imports firebase/auth, only needed for auth features
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
