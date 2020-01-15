import { Component, Input, forwardRef, Injector, Optional } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlContainer, NgForm, } from '@angular/forms';
import { BaseComponent } from '../../../form';
import { CoreService } from '../../../core.service';


let identifier = 0;
@Component({
  selector: 'cz-mask-input',
  templateUrl: './mask.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MaskComponent),
    multi: true,
  }],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})

export class MaskComponent extends BaseComponent {
  @Input() public label: string;
  @Input() public placeholder: string;
  @Input() public type = 'text';
  @Input() public Required = false;
  @Input() public min;
  @Input() public max;
  @Input() dropSpecialCharacters = true;
  @Input() prefix = '';
  @Input() mask = '';
  @Input() czValidator: any;

  public identifier = `cz-mask-input-${identifier++}`;

  constructor(injector: Injector, @Optional() form: NgForm, svc: CoreService) {
    super(injector, form, svc);
  }


}

