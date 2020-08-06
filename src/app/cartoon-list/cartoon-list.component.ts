import { Component, OnInit } from '@angular/core';
import { Cartoon } from '../model/cartoon';
import { CartoonService } from '../service/cartoon.service';

@Component({
  selector: 'app-cartoon-list',
  templateUrl: './cartoon-list.component.html',
  styleUrls: ['./cartoon-list.component.css']
})
export class CartoonListComponent implements OnInit {

  cartoons: Cartoon[];

  constructor(private cartoonService: CartoonService) {

  }

  ngOnInit() {
    this.cartoonService.findAll().subscribe(data => {
      this.cartoons = data;
    });
  }

}
