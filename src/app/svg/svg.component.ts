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
	
	toggleCollapse() {
	    this.isCollapsed = !this.isCollapsed;
	  }

	cartoons: Cartoon[];

  constructor(private cartoonService: CartoonService) { }

  ngOnInit(): void {
	   this.cartoonService.findAll().subscribe(data => {
      this.cartoons = data;
    });
  }


}
