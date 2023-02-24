import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public MyForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.MyForm = this.fb.group({
      productName: ['', [Validators.required]],
    })
  }

  public send() {
    console.log("FORM SUBMITED")
    console.log(this.MyForm.value)
  }
}
