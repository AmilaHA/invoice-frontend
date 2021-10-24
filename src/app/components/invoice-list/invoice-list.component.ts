import { Component, OnInit } from '@angular/core';
import {InvoiceService} from '../../services/invoice.service';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {

  dataList: any;
  status: string;

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit() {
    this.loadInvoiceList();
  }

  loadInvoiceList() {
    this.invoiceService.getInvoiceList().subscribe(data => {
      this.dataList = data;
    });
  }

}
