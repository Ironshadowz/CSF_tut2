import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent
{
  form!:FormGroup
  private fb = inject(FormBuilder)
  //private forms = inject(ReactiveFormsModule)
  tasks:Task[]=[];

  ngOnInit()
  {
    this.form=this.fb.group
        ({
          description:this.fb.control<string>('', Validators.required),
          priority: this.fb.control<string>('', Validators.required),
          date:this.fb.control<string>('', Validators.required)
        });
  }
  add(task:Task)
  {
    console.log(task.date)
    this.tasks.push(task);
  }
  delete(index:number)
  {
    this.tasks.splice(index,1);
  }
}
