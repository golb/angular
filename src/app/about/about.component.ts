import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  contactForm: FormGroup;
  submitted: boolean = false;
  success: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
  
  onContact(): void {
    this.submitted = true;
    if (this.contactForm.invalid) return;
    this.success = true;
  }
}
