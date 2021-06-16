import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Agency } from '../model/agency';
import { Observable } from 'rxjs/internal/Observable';
import { Agent } from 'src/app/agent/model/agent';

@Injectable({
  providedIn: 'root',
})
export class AgencyService {
  private agencyUrl: string;
  constructor(private http: HttpClient) {
    this.agencyUrl = 'http://localhost:8081/agence';
  }
  public findAll(): Observable<Agency[]> {
    let username = 'admin';
    let password = 'admin';
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(username + ':' + password),
    });

    return this.http.get<Agency[]>(this.agencyUrl + 's');
  }

  public save(agent: Agency) {
    let username = 'admin';
    let password = 'admin';
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(username + ':' + password),
    });
    return this.http.post<Agency>(this.agencyUrl + 's', agent);
  }
  delete(id: string): Observable<any> {
    let username = 'admin';
    let password = 'admin';
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(username + ':' + password),
    });
    return this.http.delete(`${this.agencyUrl}/${id}`);
  }
  public update(id: string, agency: Agency): Observable<any> {
    let username = 'admin';
    let password = 'admin';
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(username + ':' + password),
    });
    return this.http.put(`${this.agencyUrl}/${id}`, agency);
  }

  public findAgency(id: string): Observable<Agency[]> {
    let username = 'admin';
    let password = 'admin';
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(username + ':' + password),
    });
    return this.http.get<Agency[]>(this.agencyUrl + 's?id=' + id);
  }
}
