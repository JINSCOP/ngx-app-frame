import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  AFOnlyNumberDirective,
  AFOnlyChDirective,
  AFOnlyEnDirective,
  AFOnlyDateDirective,
  AFOnlyDateTimeDirective,
  AFOnlyEmailDirective,
  AFOnlyIntDirective,
  AFOnlyFloatDirective,
  AFOnlyEnNumDirective,
  AFOnlyEnNumSingDirective,
  AFOnlyMoneyDirective,
} from './collection.directive';


const collection = [
  AFOnlyNumberDirective,
  AFOnlyChDirective,
  AFOnlyEnDirective,
  AFOnlyDateDirective,
  AFOnlyDateTimeDirective,
  AFOnlyEmailDirective,
  AFOnlyIntDirective,
  AFOnlyFloatDirective,
  AFOnlyEnNumDirective,
  AFOnlyEnNumSingDirective,
  AFOnlyMoneyDirective,
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [...collection],
  exports: [...collection],
})
export class AFValidationModule { }
