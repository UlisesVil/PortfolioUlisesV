import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-certification-dialog',
  templateUrl: './certification-dialog.component.html',
  styleUrls: ['./certification-dialog.component.css']
})

export class CertificationDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CertificationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {certImg: string, title: string, certLink: string}
  ) { }

  ngOnInit(): void {
  }

  onClickNo(): void{
    this.dialogRef.close();
  }
}
