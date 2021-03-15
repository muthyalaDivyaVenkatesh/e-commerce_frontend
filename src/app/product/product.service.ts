import { ComponentFactoryResolver, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, Subject } from "rxjs";

// const URL = "../assets/data.json";

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    // declare DataSubject
    dataSubject = new BehaviorSubject('')
    dataSubject$:Observable<{}>
    constructor(private http:HttpClient){}

    getData(val){
        console.log("we are insie getData",val)
        this.dataSubject.next(val)
        this.dataSubject$ = this.dataSubject.asObservable()
    }

    private cartSource = new Subject<any>();
    cart$ = this.cartSource.asObservable();
    cart(cartdata) {
        this.cartSource.next(cartdata);
    }
    getCartData(){
        console.log("we are inside  getData")
    }
}