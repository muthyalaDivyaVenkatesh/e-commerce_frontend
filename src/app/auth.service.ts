import {Injectable } from '@angular/core';
// import decode from  'jwt-decode';

@Injectable()
export class AuthService {
    public getToken(){
        return localStorage.getItem('token')
    }
    public isAuthenticated():boolean {
        const token = this.getToken()
        if(token) return true;
        if(token) return false;
    }
}