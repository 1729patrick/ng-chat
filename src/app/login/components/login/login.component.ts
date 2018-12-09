import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    configs = {
        isLogin: true,
        actionText: 'Entrar',
        buttonActionText: 'Criar conta'
    };
    private nameControl = new FormControl('', [Validators.required]);
    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService
    ) { }

    ngOnInit() {
        this.createForm();
    }

    createForm(): void {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]],
        });
    }

    onSubmit(): void {
        console.log(this.loginForm.value);
        console.log(this.loginForm.valid);
    }

    changeAction(): void {
        this.configs.isLogin = !this.configs.isLogin;
        this.configs.actionText = this.configs.isLogin ? 'Entrar' : 'Criar Conta';
        this.configs.buttonActionText = this.configs.isLogin ? 'Criar Conta' : 'Entrar';
        this.configs.isLogin ? this.loginForm.removeControl('name') : this.loginForm.addControl('name', this.nameControl);
    }

    get name(): FormControl {
        return <FormControl>this.loginForm.get('name');
    }

    get email(): FormControl {
        return <FormControl>this.loginForm.get('email');
    }

    get password(): FormControl {
        return <FormControl>this.loginForm.get('password');
    }
}
