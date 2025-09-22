import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private budgetData: any | null = null;

  constructor(private http: HttpClient) {}

  getBudget(): Observable<any> {
    if (this.budgetData) {
      // return cached value if already loaded
      return of(this.budgetData);
    } else {
      return this.http.get('http://localhost:4000/budget')
        .pipe(tap(data => this.budgetData = data));
    }
  }
}
