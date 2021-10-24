import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private authURL = environment.baseURL + '/api/invoice';
  constructor(private http: HttpClient,
              private router: Router
  ) { }

  getInvoiceList() {
    return this.http.get(this.authURL);
  }

  saveInvoice(data: any) {
    return this.http.post(this.authURL, data);
  }

  updateInvoice(id: any) {
    return this.http.put(this.authURL + '/', id);
  }
}
