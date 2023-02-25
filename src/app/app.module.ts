import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import { TodoComponent } from './components/todo/todo.component';

@NgModule({
  declarations: [AppComponent, TodoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: 'AIzaSyCt8B_KXm99TkNva8bAYg_arMhEEYV1MvY',
        authDomain: 'todo-list-app-65736.firebaseapp.com',
        projectId: 'todo-list-app-65736',
        storageBucket: 'todo-list-app-65736.appspot.com',
        messagingSenderId: '61003765676',
        appId: '1:61003765676:web:0167b73c4a8bf3fb4d8c09',
      })
    ),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}

