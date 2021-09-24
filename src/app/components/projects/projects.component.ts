import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDialogComponent } from '../../components/project-dialog/project-dialog.component';
import { portfolioElements } from '../../services/portfolioElements';
declare var $:any;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  public elements;

  constructor(
    public dialog: MatDialog
  ){}

  ngOnInit():void{

    this.elements=portfolioElements;
    $(document).ready(this.addAnimate);
  }

  openDialog(project): void{
    const dialogRef = this.dialog.open(ProjectDialogComponent,{
      data: {
        name: project.name,
        description: project.description,
        langs: project.langs,
        image: project.image,
        git: project.git,
        site: project.site
      }
    });
  }

  addAnimate(){
    var cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
      $('.card').mouseenter(function(){
        let randomNumber=Math.floor(Math.random()*Math.floor(6));
        switch(randomNumber){
          case 0:
          $(this).find('.card_layer').addClass('colorOne');
          $(this).find('.card_layer').removeClass('colorTwo');
          $(this).find('.card_layer').removeClass('colorThree');
          $(this).find('.card_layer').removeClass('colorFour');
          $(this).find('.card_layer').removeClass('colorFive');
          $(this).find('.card_layer').removeClass('colorSix');
          break;
          case 1:
          $(this).find('.card_layer').addClass('colorTwo');
          $(this).find('.card_layer').removeClass('colorOne');
          $(this).find('.card_layer').removeClass('colorThree');
          $(this).find('.card_layer').removeClass('colorFour');
          $(this).find('.card_layer').removeClass('colorFive');
          $(this).find('.card_layer').removeClass('colorSix');
          break;
          case 2:
          $(this).find('.card_layer').addClass('colorThree');
          $(this).find('.card_layer').removeClass('colorOne');
          $(this).find('.card_layer').removeClass('colorTwo');
          $(this).find('.card_layer').removeClass('colorFour');
          $(this).find('.card_layer').removeClass('colorFive');
          $(this).find('.card_layer').removeClass('colorSix');
          break;
          case 3:
          $(this).find('.card_layer').addClass('colorFour');
          $(this).find('.card_layer').removeClass('colorOne');
          $(this).find('.card_layer').removeClass('colortwo');
          $(this).find('.card_layer').removeClass('colorThree');
          $(this).find('.card_layer').removeClass('colorFive');
          $(this).find('.card_layer').removeClass('colorSix');
          break;
          case 4:
          $(this).find('.card_layer').addClass('colorFive');
          $(this).find('.card_layer').removeClass('colorOne');
          $(this).find('.card_layer').removeClass('colortwo');
          $(this).find('.card_layer').removeClass('colorThree');
          $(this).find('.card_layer').removeClass('colorFour');
          $(this).find('.card_layer').removeClass('colorSix');
          break;
          case 5:
          $(this).find('.card_layer').addClass('colorSix');
          $(this).find('.card_layer').removeClass('colorOne');
          $(this).find('.card_layer').removeClass('colortwo');
          $(this).find('.card_layer').removeClass('colorThree');
          $(this).find('.card_layer').removeClass('colorFour');
          $(this).find('.card_layer').removeClass('colorFive');
          break;
        }
      });

      $('.card').mouseleave(function(){
        $(this).find('.card_layer')
          .removeClass('colorOne', 'colorTwo','colorThree', 'colorFour', 'colorFive', 'colorSix');
      });

    });
  }
}
