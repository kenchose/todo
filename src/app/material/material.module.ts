import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge'
import {
  MatButtonModule,
  MatSidenavModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatRadioModule,
  MatSelectModule,
  MatToolbarModule,
  MatGridListModule
} from '@angular/material';

const material = [
  MatButtonModule,
  MatBadgeModule,
  MatSidenavModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatRadioModule,
  MatSelectModule,
  MatToolbarModule,
  MatGridListModule,
]
@NgModule({
  declarations: [],
  imports: [material],
  exports:[material]
})
export class MaterialModule { }
