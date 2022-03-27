import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskDialogComponent } from './task-dialog/component/task-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'newTaskDialog';

  public dialogResultData?: any;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.dialogResultData = result;
    });
  }

}
