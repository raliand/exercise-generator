import { Injectable, inject } from '@angular/core';
import { Observable, from, of, Subscriber } from 'rxjs';
import { Auth } from '@angular/fire/auth';
import { map, switchMap, startWith, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  isLoggedIn(): Observable<boolean> {
    return new Observable<boolean>((observer: Subscriber<boolean>) => {
      const unsubscribe = inject(Auth).onAuthStateChanged(
        (user) => {
          observer.next(!!user);
        },
        (error) => {
          observer.error(error);
        },
        () => {
          observer.complete();
        }
      );
      return unsubscribe;
    }).pipe(startWith(false));
  }
}