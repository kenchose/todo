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
  MatGridListModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatPaginatorModule,
  MatInputModule,
  MatSortModule,
  MatIconModule,
  MatExpansionModule,
  MatCardModule,
  MatMenuModule, 
  MatListModule,
  MatCheckboxModule,
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
  MatProgressSpinnerModule,
  MatTableModule,
  MatPaginatorModule,
  MatInputModule,
  MatSortModule, 
  MatIconModule,
  MatExpansionModule,
  MatCardModule, 
  MatMenuModule, 
  MatListModule,
  MatCheckboxModule,
]
@NgModule({
  declarations: [],
  imports: [material],
  exports:[material]
})
export class MaterialModule { }
