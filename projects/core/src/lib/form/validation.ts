import { Component, Input } from '@angular/core';
@Component({
    selector: 'validation',
    template: `
    <div class="validation" *ngFor="let message of messages">{{message}}</div>
  `,
    styles: [`
   
    .validation {
      color: red;
      font-size:12px;
    }`
    ]
})
export class ValidationComponent {
    @Input() messages: Array<string>;
}