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

    const datos = this.contactForm.value;

    const contactosExistentes = localStorage.getItem('contactos');
    const contactos = contactosExistentes ? JSON.parse(contactosExistentes) : [];
    contactos.push(datos);
    localStorage.setItem('contactos', JSON.stringify(contactos, null, 2));

    const blob = new Blob([JSON.stringify(contactos, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'contactos.json';
    a.click();
    URL.revokeObjectURL(url);

    alert('Formulario enviado y contacto creado automáticamente');

    this.contactForm.reset();
  }
}
