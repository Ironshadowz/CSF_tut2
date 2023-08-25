import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
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
          description:this.fb.control<string>(''),
          priority: this.fb.control<string>(''),
          date:this.fb.control<string>('')
        });
  }
  add(task:Task)
  {
    console.log(task)
    this.tasks.push(task);
  }
  delete(index:number)
  {
    this.tasks.splice(index,1);
  }
}
