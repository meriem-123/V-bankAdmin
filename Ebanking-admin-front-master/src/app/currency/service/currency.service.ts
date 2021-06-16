import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Currency } from '../model/currency';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private currencyUrl: string;
  constructor(private http: HttpClient) {
    this.currencyUrl = 'http://localhost:8081/devise';
  }
  public findAll(): Observable<Currency[]> {
    let username = 'admin';
    let password = 'admin';
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(username + ':' + password),
    });

    return this.http.get<Currency[]>(this.currencyUrl + 's');
  }
  public findCurrency(code: string): Observable<Currency[]> {
    let username = 'admin';
    let password = 'admin';
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(username + ':' + password),
    });
    return this.http.get<Currency[]>(this.currencyUrl + 's?code=' + code);
  }

  public save(currency: Currency) {
    let username = 'admin';
    let password = 'admin';
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(username + ':' + password),
    });
    return this.http.post<Currency>(this.currencyUrl + 's', currency);
  }
  public delete(id: string): Observable<any> {
    let username = 'admin';
    let password = 'admin';
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(username + ':' + password),
    });
    return this.http.delete(`${this.currencyUrl}/${id}`);
  }

  public update(id: string, currency: Currency): Observable<any> {
    let username = 'admin';
    let password = 'admin';
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(username + ':' + password),
    });
    return this.http.put(`${this.currencyUrl}/${id}`, currency);
  }
}
