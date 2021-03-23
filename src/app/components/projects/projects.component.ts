import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDialogComponent } from '../../components/project-dialog/project-dialog.component';
declare var $:any;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  public url: string;
  public elements;

  constructor(
    public dialog: MatDialog
  ){}

  ngOnInit():void{

    this.elements=[
      {
        "name" : "Top Racing Games",
        "description" : "Web Page with Backend and Data Base",
        "category" : "Web Page",
        "year" : 2020,
        "langs" : "Angular, JavaScript, TypeScript, NodeJS, MongoDB Atlas, ExpressJS, jQuery, Css3, Heroku, JSON Web Token, Box Slider Library",
        "image" : "01.jpg",
        "git" : "https://github.com/UlisesVil/TopRacingGames",
        "site" : "https://ulisesvil.github.io/TopRacingGames"
      },
      {
        "name" : "API Rest Top Racing Games Site",
        "description" : "API to the page Top Racing Games",
        "category" : "API REST",
        "year" : 2020,
        "langs" : "NodeJS, MongoDB Atlas, ExpressJS, Heroku, JSON Web Token",
        "image" : "02.jpg",
        "git" : "https://github.com/UlisesVil/TopRacingGames-API",
        "site" : "https://top-racing-games-api.herokuapp.com"
      },
      {
        "name" : "1up-Games News",
        "description" : "Web Page Games News",
        "category" : "Web Page",
        "year" : 2020,
        "langs" : "JavaScript, jQuery, PHP, My SQL, CSS3,  PHP my Admin, Particles JS library, Font Awesome library",
        "image" : "03.jpg",
        "git" : "https://github.com/UlisesVil/GamesNews-PHP-mysql",
        "site" : "http://1up-gamesnews.atwebpages.com"
      },
      {
        "name" : "Project JS",
        "description" : "Web Page",
        "category" : "Web Page",
        "year" : 2020,
        "langs" : "JavaScript, jQuery, Moment library, Box Slider Library, CSS3 ",
        "image" : "04.jpg",
        "git" : "https://github.com/UlisesVil/Web-JavaScript-Project",
        "site" : "https://ulisesvil.github.io/Web-JavaScript-Project/"
      },
      {
        "name" : "Chat App",
        "description" : "Chat App with socket io and node JS",
        "category" : "App",
        "year" : 2020,
        "langs" : "NodeJS, Socket.io, Express, CSS3, Heroku",
        "image" : "05.jpg",
        "git" : "https://github.com/UlisesVil/Chat-NodeJS-Socket.io",
        "site" : "https://ulises-node-chat.herokuapp.com"
      },
      {
        "name" : "Pic N Share",
        "description" : "Social App",
        "category" : "App",
        "year" : 2020,
        "langs" : "Laravel, PHP, My SQL, jQuery, CSS3, PHP my Admin, Tail Wind Library, Moment JS Library",
        "image" : "06.jpg",
        "git" : "https://github.com/UlisesVil/Laravel-SocialApp-PicnShare",
        "site" : "http://ulises-social-app.atwebpages.com"
      },
      {
        "name" : "Shop",
        "description" : "Clothes Men's Shop",
        "category" : "App",
        "year" : 2020,
        "langs" : "PHP, My SQL, PHP my Admin, CSS3",
        "image" : "07.jpg",
        "git" : "https://github.com/UlisesVil/project-shop-PHP-MySQL-POO-MVC",
        "site" : "http://ulisestore.atwebpages.com"
      },
      {
        "name" : "Tasks App",
        "description" : "Task Manager App",
        "category" : "App",
        "year" : 2020,
        "langs" : "Symfony, PHP, My SQL, PHP my Admin, Twig, CSS3",
        "image" : "08.jpg",
        "git" : "https://github.com/UlisesVil/Symfony-TasksApp",
        "site" : "http://ulises-tasksapp.atwebpages.com"
      },
      {
        "name" : "Mark Down Previewer",
        "description" : "React App Mark Down Previewer ",
        "category" : "App",
        "year" : 2020,
        "langs" : "React, JavaScript, Sass,  Font Awesome Library, Marked Library",
        "image" : "09.jpg",
        "git" : "https://github.com/UlisesVil/markdownpreviewer",
        "site" : "https://ulisesvil.github.io/markdownpreviewer/"
      },
      {
        "name" : "Random Quote Machine",
        "description" : "React App Random Quote Machine ",
        "category" : "App",
        "year" : 2020,
        "langs" : "React, JavaScript, CSS3",
        "image" : "10.jpg",
        "git" : "https://github.com/UlisesVil/ReactRandomQuote",
        "site" : "https://ulisesvil.github.io/ReactRandomQuote/"
      },
      {
        "name" : "Pomodoro Clock",
        "description" : "React App Pomodoro Clock",
        "category" : "App",
        "year" : 2020,
        "langs" : "React, JavaScript, Sass, Font Awesome Library",
        "image" : "11.jpg",
        "git" : "https://github.com/UlisesVil/ReactPomodoroClock",
        "site" : "https://ulisesvil.github.io/ReactPomodoroClock"
      },
      {
        "name" : "Drum Machine",
        "description" : "React App Drum Machine",
        "category" : "App",
        "year" : 2020,
        "langs" : "React, JavaScript, Sass",
        "image" : "12.jpg",
        "git" : "https://github.com/UlisesVil/ReactDrumMachine",
        "site" : "https://ulisesvil.github.io/ReactDrumMachine/"
      },
      {
        "name" : "React Calc",
        "description" : "React App Calc with eval method",
        "category" : "App",
        "year" : 2020,
        "langs" : "React, JavaScript, Sass",
        "image" : "13.jpg",
        "git" : "https://github.com/UlisesVil/ReactJavascriptCalculator",
        "site" : "https://ulisesvil.github.io/ReactJavascriptCalculator/"
      },
      {
        "name" : "JavaScript  Calc",
        "description" : "Calc with JavaScript No eval Method used",
        "category" : "App",
        "year" : 2020,
        "langs" : "JavaScript, CSS3",
        "image" : "14.jpg",
        "git" : "https://github.com/UlisesVil/CalculatorJS-whitout-eval-method",
        "site" : "https://ulisesvil.github.io/CalculatorJS-whitout-eval-method/"
      },
      {
        "name" : "Etch A Sketch",
        "description" : "App Etch A Sketch",
        "category" : "App",
        "year" : 2020,
        "langs" : "JavaScript, CSS3",
        "image" : "15.jpg",
        "git" : "https://github.com/UlisesVil/Etch-a-sketch",
        "site" : "https://ulisesvil.github.io/Etch-a-sketch/"
      },
      {
        "name" : "Rock Paper Scissors Game",
        "description" : "Java Script Rock Paper Scissors Game",
        "category" : "Game",
        "year" : 2020,
        "langs" : "JavaScript, CSS3",
        "image" : "16.jpg",
        "git" : "https://github.com/UlisesVil/project_rock_paper_scissors",
        "site" : "https://ulisesvil.github.io/project_rock_paper_scissors"
      }
    ];

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
        //console.log(randomNumber);
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
        $(this).find('.card_layer').removeClass('colorOne', 'colorTwo','colorThree', 'colorFour', 'colorFive', 'colorSix');
      });
    });
  }
}
