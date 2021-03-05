
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CertificationDialogComponent } from '../../components/certification-dialog/certification-dialog.component';
declare var $:any;

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

 

  constructor(
    public dialog: MatDialog
  ) { }



  ngOnInit() {
   
    
  }

  openDialogImg(img): void{
    console.log(img);
    
    const dialogRef = this.dialog.open(CertificationDialogComponent,{
      data: {
        img: img
      }
    });
    dialogRef.afterClosed().subscribe(res =>{
      console.log(res);
      if(res){
        console.log('esta es la res del dialog');
        
      }
    });
  }
  

}
