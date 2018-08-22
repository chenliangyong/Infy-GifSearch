
import { Validator, AbstractControl } from "@angular/forms";

export class PasswordValidator{

    static checkPW(pw: AbstractControl) {
        let num_REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
        return num_REGEXP.test(pw.value)? null:{checkPW:true} ;
    }
}