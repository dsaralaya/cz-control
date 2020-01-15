import { ControlValueAccessor, NgControl, NgForm, Validators } from "@angular/forms";
import { OnDestroy, Injector, Optional, Component } from "@angular/core";
import { errorMessages } from './messages';
import { CoreService } from '../core.service';
@Component({
    template: ''
})
export class BaseComponent implements ControlValueAccessor, OnDestroy {
    ngControl: NgControl;
    value = '';
    label: any;
    Required: any;
    czValidator: any;
    min: any;
    max: any;
    onChange = (value: string) => { };
    onTouched = () => { };

    constructor(private injector: Injector, private form: NgForm, private svc: CoreService) { }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.ngControl = this.injector.get(NgControl);
            if (this.ngControl && this.ngControl.control) {
                if (this.Required) {
                    this.ngControl.control.setValidators([Validators.required]);
                }
                if (this.min) {
                    this.ngControl.control.setValidators([Validators.min(this.min)]);
                }
                if (this.max) {
                    this.ngControl.control.setValidators([Validators.max(this.max)]);
                }
                if (this.czValidator) {
                    this.ngControl.control.setValidators([this.czValidator]);
                }
                this.ngControl.control.updateValueAndValidity();
            }
        });
    }

    get invalid() {
        if (this.ngControl && this.ngControl.control && this.ngControl.control.invalid) {
            return this.ngControl.control.touched || (this.form ? this.form.submitted : false);
        }
        return false;
    }

    get failures() {
        if (this.ngControl && this.ngControl.control.errors) {
            return Object.keys(this.ngControl.control.errors).map(k => errorMessages(this.label, k, (this.svc.messages || [])));
        }
        return [];
    }

    touched() {
        this.ngControl.control.markAsTouched();
    }

    valueChanged(value: string) {
        this.writeValue(value);
        this.touched();
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