import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartoonListComponent } from './cartoon-list/cartoon-list.component';
import { CartoonFormComponent } from './cartoon-form/cartoon-form.component';
import { SvgComponent } from './svg/svg.component';

const routes: Routes = [
	{ path: 'cartoons', component: CartoonListComponent },
  	{ path: 'addcartoon', component: CartoonFormComponent },
	{ path: 'svg', component: SvgComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
