import { Component, OnInit, Input, Injector, Optional, forwardRef } from '@angular/core';
import { BaseComponent } from '../../../form';
import { NgForm, NG_VALUE_ACCESSOR, ControlContainer } from '@angular/forms';
import { CoreService } from '../../../core.service';
let identifier = 0;
@Component({
  selector: 'cz-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RadioComponent),
    multi: true,
  }],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})

export class RadioComponent extends BaseComponent {
  @Input() public label: string;
  @Input() public Required = false;
  @Input() options: any;
  @Input() czValidator: any;
  @Input() readOnly = false;
  public identifier = `cz-radio-${identifier++}`;

  constructor(injector: Injector, @Optional() form: NgForm, svc: CoreService) {
    super(injector, form, svc);
  }
}
