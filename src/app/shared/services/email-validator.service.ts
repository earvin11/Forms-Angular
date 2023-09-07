import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidator implements AsyncValidator {
    
    validate( control: AbstractControl ): Observable<ValidationErrors | null> {
        const email = control.value;

        const httpCallObservable =  new Observable<ValidationErrors | null>( ( subscriber ) => {

            if( email === 'earvin@gmail.com' ) {
                // esta envia la respuesta al que se suscribio
                subscriber.next({ emailTaken: true });
                // esto termina la subscripcion
                subscriber.complete();
            }

            subscriber.next(null);
            subscriber.complete();

        });

        return httpCallObservable;
    }
       
    
}