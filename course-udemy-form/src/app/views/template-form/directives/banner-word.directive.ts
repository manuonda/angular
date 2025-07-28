
import { Directive , input} from '@angular/core';
import {AbstractControl, ValidationErrors, Validator , NG_VALIDATORS} from "@angular/forms";

@Directive({
  selector: '[bannedWord]',
  standalone: true,
  providers:[
    { provide: NG_VALIDATORS, useExisting: BannedWordDirective, multi:true}
  ]
 })
  export class BannedWordDirective implements Validator{

  bannedWord = input.required<string | string[]>();
    constructor() {

  }
  validate(control: AbstractControl<string>): ValidationErrors | null {
     const bannedWords: string[] = Array.isArray(this.bannedWord()) ?
      this.bannedWord() as string[]: [this.bannedWord()] as string[];

      const controlValue = control.value?.toLowerCase().trim();
      const foundWord = bannedWords.find((word) =>  word.toLowerCase() === controlValue);


      return foundWord ?
      { bannedWordValidator: { bannedWord: foundWord } } : null ;

    }
}
