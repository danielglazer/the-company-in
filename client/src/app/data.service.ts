import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Company } from './dto/company.dto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  history: BehaviorSubject<Company[]> = new BehaviorSubject<Company[]>([]);
  constructor(private httpClient: HttpClient) { }

  async getCompaniesForDomain(domain: string) {
      this.httpClient.get<Company>(environment.apiUrl + domain)
      .subscribe((data: Company) => {
        this.history.next([...this.history.value, data]);
      })
  }
}
