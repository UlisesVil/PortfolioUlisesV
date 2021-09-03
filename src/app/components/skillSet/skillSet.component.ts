import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-skillSet',
  templateUrl: './skillSet.component.html',
  styleUrls: ['./skillSet.component.css']
})
export class SkillSetComponent implements OnInit {

  public title: string;
  public elements;

  constructor(){
    this.title = "Skill Set:";
  }

  ngOnInit(): void {

    this.skillsImages();

    window.addEventListener('load', this.coverAnimate);
    window.addEventListener('load', this.addAnimate);
  }

  skillsImages(){
    this.elements=[
      {
        name:'JavaScript',
        image:'assets/img/skills/00.png'
      },
      {
        name:'Node JS',
        image:'assets/img/skills/01.png'
      },
      {
        name:'Angular',
        image:'assets/img/skills/02.png'
      },
      {
        name:'React',
        image:'assets/img/skills/03.png'
      },
      {
        name:'TypeScript',
        image:'assets/img/skills/04.png'
      },
      {
        name:'Mongo DB & Mongoose',
        image:'assets/img/skills/05.png'
      },
      {
        name:'Express',
        image:'assets/img/skills/06.png'
      },
      {
        name:'HTML 5',
        image:'assets/img/skills/07.png'
      },
      {
        name:'CSS 3',
        image:'assets/img/skills/08.png'
      },
      {
        name:'PHP',
        image:'assets/img/skills/09.png'
      },
      {
        name:'Laravel',
        image:'assets/img/skills/010.png'
      },
      {
        name:'Simfony',
        image:'assets/img/skills/011.png'
      },
      {
        name:'My SQL',
        image:'assets/img/skills/012.png'
      },
      {
        name:'npm',
        image:'assets/img/skills/013.png'
      },
      {
        name:'Git Hub',
        image:'assets/img/skills/014.png'
      },
      {
        name:'Git GUI',
        image:'assets/img/skills/015.png'
      },
      {
        name:'Visual Studio Code',
        image:'assets/img/skills/016.png'
      },
      {
        name:'Net Beans',
        image:'assets/img/skills/017.png'
      },
      {
        name:'Postman',
        image:'assets/img/skills/018.png'
      },
      {
        name:'Bootstrap',
        image:'assets/img/skills/019.png'
      },
      {
        name:'WordPress',
        image:'assets/img/skills/020.png'
      },
      {
        name:'jQuery',
        image:'assets/img/skills/021.png'
      },
      {
        name:'Heroku',
        image:'assets/img/skills/022.png'
      },
      {
        name:'Sass',
        image:'assets/img/skills/023.png'
      },
    ];
  }

  coverAnimate(){
    var cardCover = document.querySelectorAll('.cardCover');
    cardCover.forEach((card) => {
      $('.element').mouseenter(function(){
        $(this).find('.cardCover').removeClass('leave');
        $(this).find('.cardCover').addClass('enter');
      });
      $('.element').mouseleave(function(){
        $(this).find('.cardCover').removeClass('enter');
        $(this).find('.cardCover').addClass('leave');
      });
    });
  }

  addAnimate(){
    var cards = document.querySelectorAll('.element');
    cards.forEach((card) => {
      $('.element').mouseenter(function(){
        let randomNumber=Math.floor(Math.random()*Math.floor(6));
        switch(randomNumber){
          case 0:
            $(this).find('.cardCover').addClass('colorOne');
            $(this).find('.cardCover').removeClass('colorTwo');
            $(this).find('.cardCover').removeClass('colorThree');
            $(this).find('.cardCover').removeClass('colorFour');
            $(this).find('.cardCover').removeClass('colorFive');
            $(this).find('.cardCover').removeClass('colorSix');
          break;
          case 1:
            $(this).find('.cardCover').addClass('colorTwo');
            $(this).find('.cardCover').removeClass('colorOne');
            $(this).find('.cardCover').removeClass('colorThree');
            $(this).find('.cardCover').removeClass('colorFour');
            $(this).find('.cardCover').removeClass('colorFive');
            $(this).find('.cardCover').removeClass('colorSix');
          break;
          case 2:
            $(this).find('.cardCover').addClass('colorThree');
            $(this).find('.cardCover').removeClass('colorOne');
            $(this).find('.cardCover').removeClass('colorTwo');
            $(this).find('.cardCover').removeClass('colorFour');
            $(this).find('.cardCover').removeClass('colorFive');
            $(this).find('.cardCover').removeClass('colorSix');
          break;
          case 3:
            $(this).find('.cardCover').addClass('colorFour');
            $(this).find('.cardCover').removeClass('colorOne');
            $(this).find('.cardCover').removeClass('colortwo');
            $(this).find('.cardCover').removeClass('colorThree');
            $(this).find('.cardCover').removeClass('colorFive');
            $(this).find('.cardCover').removeClass('colorSix');
          break;
          case 4:
            $(this).find('.cardCover').addClass('colorFive');
            $(this).find('.cardCover').removeClass('colorOne');
            $(this).find('.cardCover').removeClass('colortwo');
            $(this).find('.cardCover').removeClass('colorThree');
            $(this).find('.cardCover').removeClass('colorFour');
            $(this).find('.cardCover').removeClass('colorSix');
          break;
          case 5:
            $(this).find('.cardCover').addClass('colorSix');
            $(this).find('.cardCover').removeClass('colorOne');
            $(this).find('.cardCover').removeClass('colortwo');
            $(this).find('.cardCover').removeClass('colorThree');
            $(this).find('.cardCover').removeClass('colorFour');
            $(this).find('.cardCover').removeClass('colorFive');
          break;
        }
      });
      $('.element').mouseleave(function(){
        $(this).find('.cardCover').removeClass('colorOne', 'colorTwo','colorThree', 'colorFour', 'colorFive', 'colorSix');
      });
    });
  }
}
