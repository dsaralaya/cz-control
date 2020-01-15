import { Component, OnInit, Input, Injector, Optional, forwardRef } from '@angular/core';
import { BaseComponent } from '../../../form';
import { NgControl, NgForm, NG_VALUE_ACCESSOR, ControlContainer } from '@angular/forms';
import { CoreService } from '../../../core.service';

@Component({
  selector: 'cz-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckboxComponent),
    multi: true,
  }],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CheckboxComponent extends BaseComponent {

  @Input() public label: string;
  @Input() public placeholder: string;
  @Input() public Required = false
  @Input() options: any;
  @Input() czValidator: any;
  ngControl: NgControl;
  value: string = '';
  constructor(injector: Injector, @Optional() form: NgForm, svc: CoreService) {
    super(injector, form, svc);
  }

  get invalid() {

    if (this.Required && !this.value && this.ngControl) {
      this.ngControl.control.setErrors({ required: true });
    }
    if (this.ngControl && this.ngControl.control && this.ngControl.control.invalid) {
      return this.ngControl.control.touched || this['form'].submitted;
    }
    return false;
  }

}
