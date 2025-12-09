import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';

interface ContactControls {
  email: FormControl;
  nombre: FormControl;
  telefono: FormControl;
  comentarios: FormControl;
  causa: FormControl;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {

  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      nombre: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]{7,15}$')]],
      comentarios: ['', Validators.required],
      causa: ['', Validators.required]
    });
  }


  get f(): ContactControls {
    return this.contactForm.controls as unknown as ContactControls;
  }

  enviar() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    console.log('Formulario válido:', this.contactForm.value);
    alert('Formulario enviado correctamente');
    this.contactForm.reset();
  }
}