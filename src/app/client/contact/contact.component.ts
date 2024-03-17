import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs from '@emailjs/browser';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  QuestionAddForm : FormGroup ;
  constructor(private fb:FormBuilder) {
    this.QuestionAddForm = this.fb.group ({
      name: [''],
      to_name: ['Admin'],
      email: [''],
      phone: [''],
      subject: [''],
      message: [''],
    });
  }
  
  async onSubmit() {
    emailjs.init('ELdBDcYc7IBCoFYmv');
    let reponse = await emailjs.send("service_123","template_kv1g59m",{
      name: this.QuestionAddForm.value.name,
      to_name: this.QuestionAddForm.value.to_name,
      email: this.QuestionAddForm.value.email,
      phone: this.QuestionAddForm.value.phone,
      subject: this.QuestionAddForm.value.subject,
      message: this.QuestionAddForm.value.message,
    });

    alert('Message envoyer..');
    this.QuestionAddForm.reset();
  }
}