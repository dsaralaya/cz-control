import { ControlValueAccessor, NgControl, NgForm, Validators } from "@angular/forms";
import { OnDestroy, Injector, Optional, Component, SimpleChanges, Output, EventEmitter } from "@angular/core";
import { errorMessages } from './messages';
import { CoreService } from '../core.service';
@Component({
    template: ''
})
export class BaseComponent implements ControlValueAccessor, OnDestroy {
    ngControl: NgControl;
    value = '';
    type: any;
    label: any;
    Required: any;
    czValidator: any;
    min: any;
    max: any;
    onChange = (value: string) => { };
    onTouched = () => { };
    arryValidator = [];
    pattern: any;
    @Output() blur = new EventEmitter();
    constructor(private injector: Injector, private form: NgForm, private svc: CoreService) { }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.Required && changes.Required.currentValue != changes.Required.previousValue && changes.Required.previousValue != undefined) {
            this.arryValidator = [];
            this.ngControl.control.setValidators(null);
            this.ngControl.control.clearValidators();
            this.getValidators();
        }
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.ngControl = this.injector.get(NgControl);
            if (this.ngControl && this.ngControl.control) {
                this.getValidators();
            }
        });
    }
    getValidators() {
        if (this.Required) {
            this.arryValidator.push(Validators.required);

        }
        if (this.min) {
            this.arryValidator.push(Validators.min(parseFloat(this.min)));
        }
        if (this.max) {
            this.arryValidator.push(Validators.max(parseFloat(this.max)));
        }
        if (this.pattern) {
            this.arryValidator.push(Validators.pattern(new RegExp(this.pattern)));
        }
        if (this.type === 'email') {
            this.arryValidator.push(Validators.email);
        }
        if (this.czValidator) {
            this.arryValidator.push(this.czValidator);
        }
        if (this.arryValidator.length > 0) {
            this.ngControl.control.setValidators(this.arryValidator);
            this.ngControl.control.updateValueAndValidity();
        }
    }

    get invalid() {
        if (this.ngControl && this.ngControl.control && this.ngControl.control.invalid) {
            return this.ngControl.control.touched || (this.form ? this.form.submitted : false);
        }
        return false;
    }

    get failures() {
        if (this.ngControl && this.ngControl.control.errors) {
            return Object.keys(this.ngControl.control.errors).map(k => errorMessages(k, (this.svc.messages || []), this));
        }
        return [];
    }

    touched() {
        this.ngControl.control.markAsTouched();
    }

    valueChanged(value: string) {
        this.writeValue(value);
        this.touched();
        this.blur.emit(value);
    }

    writeValue(value: string = ''): void {
        this.value = value;
        this.onChange(this.value);
    }

    registerOnChange(fn: (value: string) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    ngOnDestroy() {
        this.ngControl.reset();
        this.ngControl.control.setValidators(null);
        this.ngControl.control.updateValueAndValidity();
    }
}