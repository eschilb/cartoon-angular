import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CartoonListComponent } from './cartoon-list/cartoon-list.component';
import { CartoonFormComponent } from './cartoon-form/cartoon-form.component';
import { CartoonService } from './service/cartoon.service';
import { SvgComponent } from './svg/svg.component';

@NgModule({
  declarations: [
    AppComponent,
    CartoonListComponent,
    CartoonFormComponent,
    SvgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
	FormsModule
  ],
  providers: [CartoonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
