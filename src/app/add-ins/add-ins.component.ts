import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { InventarioService } from '../inventario.service';

@Component({
  selector: 'app-add-ins',
  templateUrl: './add-ins.component.html',
  styleUrls: ['./add-ins.component.css'],
})
export class AddInsComponent implements OnInit {
  formGroup: FormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';

  constructor(private formBuilder: FormBuilder, public inventarioService: InventarioService) {
    this.createForm();

  }

  ngOnInit() {
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', [Validators.required]],
      type: ['', [Validators.required]]
    });
  }

  get name() {
    return this.formGroup.get('name') as FormControl;
  }

  onSubmit() {
    console.log('values',this.formGroup.value);
    this.inventarioService.addInventarioItem(this.formGroup.value);
    this.createForm();
    alert('Instrumeno guardado');
  }
}
