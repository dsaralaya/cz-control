import { Component, Input, Optional, Injector, forwardRef } from '@angular/core';
import { BaseComponent } from '../../../form';
import { NgForm, NG_VALUE_ACCESSOR, ControlContainer } from '@angular/forms';
import { CoreService } from '../../../core.service';

@Component({
  selector: 'cz-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DropdownComponent),
    multi: true,
  }],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DropdownComponent extends BaseComponent {

  @Input() public label: string;
  @Input() public placeholder: string;
  @Input() public Required = false
  @Input() public bindLabel = 'name';
  @Input() public bindValue = 'name';
  @Input() options: any;
  @Input() czValidator: any;
  value: string = '';
  constructor(injector: Injector, @Optional() form: NgForm, svc: CoreService) {
    super(injector, form, svc);
  }

}
