import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import * as AOS from 'aos';
import { ContactService } from '../../services/contact.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form!: FormGroup;

  constructor( private fb: FormBuilder, private contact: ContactService ) { }

  ngOnInit(): void {
    AOS.init();
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    })
  }

  invalidForm() {
    return Object.values(this.form.controls).forEach( control => control.markAsTouched());
  }

  invalidInput(input: string): any {
    return this.form.get(input)?.invalid && this.form.get(input)?.touched;
  }

  onSubmit() {
    if (this.form.invalid) {
      this.invalidForm();
      return;
    }

    Swal.fire('Mensaje enviado con exito', '', 'success');
    this.contact.sendMessage(this.form.value).subscribe();
    this.form.reset();

  }

}
