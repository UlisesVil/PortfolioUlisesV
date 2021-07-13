import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
declare var $:any;

@Component({
  selector: 'app-project-dialog',
  templateUrl: './project-dialog.component.html',
  styleUrls: ['./project-dialog.component.css']
})

export class ProjectDialogComponent implements OnInit {
  public url: string;
  public langs;
  public description;

  constructor(
    public dialogRef: MatDialogRef<ProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {name: string , description: string, langs: string, image: string, git: string, site: string}
  ) {}

  ngOnInit(): void {
    this.langs= this.data.langs.split(', ');
    this.description= this.data.description.split('*');
  }

  onClickNo(): void{
    this.dialogRef.close();
  }

}
