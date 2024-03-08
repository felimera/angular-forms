import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './dynamic-page.component.html',
  styles: ``
})
export class DynamicPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGame: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Death Stranding', Validators.required],
    ]),
  });

  constructor(private fb: FormBuilder) { }

  get favoriteGames(){
    return this.myForm.get('favoriteGame') as FormArray;
  }
  onSumit(): void {
    if (!this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log('this.myForm.value ', this.myForm.value);
    this.myForm.reset();
  }
}
