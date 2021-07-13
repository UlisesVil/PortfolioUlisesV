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
  public certifications;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {

    this.certifications=[
      {
        certImg:'assets/img/certifications/masterJS.jpg',
        title:'Master in Javascript: JS, jQuery, Angular, NodeJS Certification',
        certLink: 'https://www.udemy.com/certificate/UC-35ebc881-2a41-47f8-adad-4c689d3f098e'
      },
      {
        certImg:'assets/img/certifications/MasterPHP.jpg',
        title:'Master in PHP, SQL, POO, MVC, Laravel, Symfony, WordPress Certification',
        certLink: 'https://www.udemy.com/certificate/UC-d7933617-d82e-4484-8c32-d2a672497b27'
      },
      {
        certImg:'assets/img/certifications/SEO.jpg',
        title:'SEO y Posicionamiento Web para Desarrolladores Web Certification',
        certLink: 'https://www.udemy.com/certificate/UC-a3b673ba-f7c7-4763-bdbf-ca3b19c34049'
      },
      {
        certImg:'assets/img/certifications/JavaScriptAlgorithmsDataStructures.jpg',
        title:'JavaScript Algorithms and Data Structures Certification',
        certLink: 'https://www.freecodecamp.org/certification/fcc8cfd608b-0982-46f9-99c8-80ea90a04a32/javascript-algorithms-and-data-structures'
      },
      {
        certImg:'assets/img/certifications/frontEnd.jpg',
        title:'Front End Libraries Certification',
        certLink: 'https://www.freecodecamp.org/certification/fcc8cfd608b-0982-46f9-99c8-80ea90a04a32/front-end-libraries'
      },
      {
        certImg:'assets/img/certifications/ResponsiveWebDesign.jpg',
        title:'Responsive Web Design Certification',
        certLink: 'https://www.freecodecamp.org/certification/fcc8cfd608b-0982-46f9-99c8-80ea90a04a32/responsive-web-design'
      }
    ];
  }

  openDialogImg(certification): void{
    const dialogRef = this.dialog.open(CertificationDialogComponent,{
      data: {
        certImg: certification.certImg,
        title: certification.title,
        certLink: certification.certLink,
      }
    });
  }
}
