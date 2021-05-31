import { ApiService } from './../../service/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
export interface CustomerData {
  id: number;
  name: string;
  address: string;
}

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  dataGetAllCustomer: any ;
  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    await this.getAllCustomer();
  }

  async getAllCustomer(){
    try {
      this.dataGetAllCustomer = await this.apiService.getAllCustomer().toPromise();
    } catch (error) {
      console.log(error);
    }
  }
}
