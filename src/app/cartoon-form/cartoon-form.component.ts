import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartoonService } from '../service/cartoon.service';
import { Cartoon } from '../model/cartoon';

@Component({
  selector: 'app-cartoon-form',
  templateUrl: './cartoon-form.component.html',
  styleUrls: ['./cartoon-form.component.css']
})
export class CartoonFormComponent {

  cartoon: Cartoon;

  constructor(private route: ActivatedRoute, private router: Router, private cartoonService: CartoonService) {
    this.cartoon = new Cartoon();
  }

  onSubmit() {
    this.cartoonService.save(this.cartoon).subscribe(result => this.gotoCartoonList());
  }

  gotoCartoonList() {
    this.router.navigate(['/cartoons']);
  }
}
