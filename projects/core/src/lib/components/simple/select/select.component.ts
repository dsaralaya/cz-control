import { Component, Input, Injector, forwardRef, Optional } from '@angular/core';
import { BaseComponent } from '../../../form';
import { NgForm, ControlContainer, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CoreService } from '../../../core.service';

@Component({
  selector: 'cz-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectComponent),
    multi: true,
  }],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SelectComponent extends BaseComponent {

  @Input() public label: string;
  @Input() public placeholder: string;
  @Input() public Required = false;
  @Input() public name: string;
  @Input() options: any;
  @Input() czValidator: any;
  value: string = '';
  constructor(injector: Injector, @Optional() form: NgForm, svc: CoreService) {
    super(injector, form, svc);
  }

}
