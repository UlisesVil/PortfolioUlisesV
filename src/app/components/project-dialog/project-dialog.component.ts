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

  constructor(
    public dialogRef: MatDialogRef<ProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {name: string , description: string, langs: string, image: string, git: string, site: string}
  ) {}

  ngOnInit(): void {
    console.log(this.data.langs);
    this.langs= this.data.langs.split(', ');
    console.log(this.langs);
  }

  onClickNo(): void{
    this.dialogRef.close();
  }

}
