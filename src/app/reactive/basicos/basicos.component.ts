import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  totalNodos = 0;


  miFormulario: FormGroup = this.fb.group({
    width: [ , [ Validators.required, Validators.min(1) ]   ],
    level: [ , [ Validators.required, Validators.min(1)] ],
  })



  constructor( private fb: FormBuilder ) { }

  ngOnInit() {
    this.miFormulario.reset({
      width: 3,
      level: 2
    })
  }


  campoEsValido( campo: string ) {

    return this.miFormulario.controls[campo].errors 
            && this.miFormulario.controls[campo].touched;
  }

  guardar() {
    this.totalNodos = 0;
    let temp = 0;
    
    if ( this.miFormulario.invalid )  {
      this.miFormulario.markAllAsTouched();
      return;
    }

    for(var i = 0; i < (Number(this.miFormulario.value['level']) + 1); i++){
      temp = temp + Math.pow(Number(this.miFormulario.value['width']), i);
    }

    this.totalNodos = temp;
  }



}
