import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap, map } from "rxjs/operators";

import { IProduct } from "./product";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  private productUrl = "api/products/products.json";

  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap(data => console.log("All " + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getProduct(id: number): Observable<IProduct | undefined> {
    return this.getProducts().pipe(
      map((products: IProduct[]) => products.find(p => p.productId === id))
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = "";
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code
      errorMessage = `Server returned code: ${err.status}, error message is ${err.message}`;
    }
    // In a real world ap, we'd send this somewhere else
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
