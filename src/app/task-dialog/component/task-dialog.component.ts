import { Component, OnInit } from '@angular/core';
import { MatChip } from '@angular/material/chips';
import { MatDialogRef } from '@angular/material/dialog';
import { Tag } from 'src/app/model/tag';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.scss']
})
export class TaskDialogComponent implements OnInit {

  public tags: Tag[] = [{name: "scuola", isSelected: false},
                        {name: "lavoro", isSelected: false},
                        {name: "spesa", isSelected: false},
                      ]

  public selectedTags: Tag[] = [];

  public tagArray: string[] = this.tags.map(element => element.name);

  public stringArray : string[] = [];

  public taskModel = {name: "", priority: 0, tags: [] as Tag[]}

  constructor(public dialogRef: MatDialogRef<TaskDialogComponent>) { }

  ngOnInit(): void {
  }

  selection(value: MatChip){
    if (value.selected === true) {
      this.stringArray = this.stringArray.filter(t => t !== value.value);
      this.taskModel.tags = this.taskModel.tags.filter(t => t !== value.value);
      value.selected = false;
    } else{
      value.selected = true;
      this.stringArray.push(value.value);
      this.taskModel.tags.push(value.value);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
