import { Component, Optional, Injector, forwardRef, Input } from '@angular/core';
import { BaseComponent } from '../../../form';
import { CoreService } from '../../../core.service';
import { NgForm, NG_VALUE_ACCESSOR, ControlContainer } from '@angular/forms';
let identifier = 0;
@Component({
  selector: 'cz-date',
  templateUrl: './date.component.html',

  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DateComponent),
    multi: true,
  }],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DateComponent extends BaseComponent {
  @Input() public label: string;
  @Input() public placeholder: string;
  @Input() public Required = false;
  @Input() czValidator: any;

  public identifier = `cz-date-${identifier++}`;
  constructor(injector: Injector, @Optional() form: NgForm, svc: CoreService) {
    super(injector, form, svc);

  }




}
