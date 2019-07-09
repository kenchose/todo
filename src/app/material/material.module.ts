import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge'
import {
  MatButtonModule
} from '@angular/material';

const material = [
  MatButtonModule,
  MatBadgeModule,
]
@NgModule({
  declarations: [],
  imports: [material],
  exports:[material]
})
export class MaterialModule { }
