import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AFPaginatorComponent } from './paginator.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [AFPaginatorComponent],
  exports: [AFPaginatorComponent],
})
export class AFPaginatorModule { }
