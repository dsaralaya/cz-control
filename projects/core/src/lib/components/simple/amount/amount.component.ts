import { Component, Input, forwardRef, Injector, Optional } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlContainer, NgForm, } from '@angular/forms';
import { BaseComponent } from '../../../form';
import { CoreService } from '../../../core.service';


let identifier = 0;
@Component({
  selector: 'cz-amount',
  templateUrl: './amount.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AmountComponent),
    multi: true,
  }],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})

export class AmountComponent extends BaseComponent {
  @Input() public label: string;
  @Input() public placeholder: string;
  @Input() public type = 'text';
  @Input() public Required = false;
  @Input() public min;
  @Input() public max;
  @Input() currency = '';

  @Input() czValidator: any;
  @Input() readOnly = false;
  public identifier = `cz-amount-${identifier++}`;

  constructor(injector: Injector, @Optional() form: NgForm, svc: CoreService) {
    super(injector, form, svc);
  }


}

