import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxMaskModule } from 'ngx-mask';
import { CommonModule } from '@angular/common';

import { InputComponent } from './components/simple/input/input.component';

import { DateComponent } from './components/simple/date/date.component';
import { CheckboxComponent } from './components/simple/checkbox/checkbox.component';
import { SelectComponent } from './components/simple/select/select.component';
import { DropdownComponent } from './components/simple/dropdown/dropdown.component';
import { RadioComponent } from './components/simple/radio/radio.component';
import { ValidationComponent } from './form/validation';
import { BaseComponent } from './form/base';

@NgModule({
  declarations: [CoreComponent, ValidationComponent, InputComponent,
    DateComponent, CheckboxComponent, SelectComponent, DropdownComponent, RadioComponent, BaseComponent],
  imports: [
    CommonModule, FormsModule, NgSelectModule, NgxMaskModule.forRoot()
  ],
  exports: [CoreComponent, InputComponent, ValidationComponent,
    DateComponent, CheckboxComponent, SelectComponent, DropdownComponent, RadioComponent, BaseComponent]
})
export class CoreModule { }
