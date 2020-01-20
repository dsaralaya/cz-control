import { Component, Input, forwardRef, Injector, Optional } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlContainer, NgForm, } from '@angular/forms';
import { BaseComponent } from '../../../form';
import { CoreService } from '../../../core.service';


let identifier = 0;
@Component({
  selector: 'cz-input',
  templateUrl: './input.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true,
  }],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})

export class InputComponent extends BaseComponent {
  @Input() public label: string;
  @Input() public placeholder: string;
  @Input() public type = 'text';
  @Input() public Required = false;
  @Input() czValidator: any;
  @Input() public min;
  @Input() public max;
  @Input() readOnly = false;
  @Input() pattern = '';

  public identifier = `cz-input-${identifier++}`;

  constructor(injector: Injector, @Optional() form: NgForm, svc: CoreService) {
    super(injector, form, svc);
  }



}

