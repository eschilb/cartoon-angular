import { Component, OnInit } from '@angular/core';
import { Cartoon } from '../model/cartoon';
import { CartoonService } from '../service/cartoon.service';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.svg',
  styleUrls: ['./svg.component.css']
})
export class SvgComponent implements OnInit {
	isCollapsed : boolean = true;
  isCollapsed1 : boolean = true;
  isCollapsed2 : boolean = true;
  isCollapsed3 : boolean = true;
  isCollapsed4 : boolean = true;
  isCollapsed5 : boolean = true;
	
	toggleCollapse() {
	  this.isCollapsed = !this.isCollapsed;
	}

  toggleCollapse1() {
      this.isCollapsed1 = !this.isCollapsed1;
  }

  toggleCollapse2() {
      this.isCollapsed2 = !this.isCollapsed2;
  }

  toggleCollapse3() {
      this.isCollapsed3 = !this.isCollapsed3;
  }

  toggleCollapse4() {
      this.isCollapsed4 = !this.isCollapsed4;
  }

  toggleCollapse5() {
      this.isCollapsed5 = !this.isCollapsed5;
  }

	cartoons: Cartoon[];

  constructor(private cartoonService: CartoonService) { }

  ngOnInit(): void {
	   this.cartoonService.findAll().subscribe(data => {
      this.cartoons = data;
    });
  }


}
