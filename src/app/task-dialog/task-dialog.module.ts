import { NgModule } from '@angular/core';
import { TaskDialogComponent } from './component/task-dialog.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    TaskDialogComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    TaskDialogComponent
  ]
})
export class TaskDialogModule { }
