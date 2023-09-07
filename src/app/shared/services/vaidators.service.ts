import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({providedIn: 'root'})
export class ValidatorsService {
    
    public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
    public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

    public cantBeStrider ( control: FormControl ): ValidationErrors | null {

        const value: string = control.value.trim().toLowerCase();
    
        if( value === 'strider' ) {
            return {
                noStraider: true,
            }
        }
    
        return null
    }

    public isValidField( form: FormGroup, field: string ) {
        return form.controls[field].errors 
        && form.controls[field].touched;
    }

    public isFieldOneEqualFieldTwo( field1: string, field2: string ) {

        return ( formGroup: AbstractControl ): ValidationErrors | null => {
            const fieldValueOne = formGroup.get(field1)?.value;
            const fieldValueTwo = formGroup.get(field2)?.value;

            if( fieldValueOne !== fieldValueTwo ) {
                formGroup.get(field2)?.setErrors({ notEqual: true });
                return { notEqual: true }
            }

            formGroup.get(field2)?.setErrors(null);
            return null;
        }

    }
    
}