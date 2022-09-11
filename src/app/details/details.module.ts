import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';
import { DetailService } from './detail.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    HttpClientModule
  ],
  providers:[DetailService]
})
export class DetailsModule { }
