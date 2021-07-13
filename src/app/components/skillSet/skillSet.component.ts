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

    this.elements=[
      {
        name:'JavaScript',
      },
      {
        name:'Node JS',
      },
      {
        name:'Angular',
      },
      {
        name:'React',
      },
      {
        name:'TypeScript',
      },
      {
        name:'jQuery',
      },
      {
        name:'Mongo DB & Mongoose',
      },
      {
        name:'Express',
      },
      {
        name:'HTML 5',
      },
      {
        name:'CSS 3',
      },
      {
        name:'PHP',
      },
      {
        name:'Laravel',
      },
      {
        name:'Simfony',
      },
      {
        name:'My SQL',
      },
      {
        name:'npm',
      },
      {
        name:'Git Hub',
      },
      {
        name:'Git GUI',
      },
      {
        name:'Visual Studio Code',
      },
      {
        name:'Net Beans',
      },
      {
        name:'Postman',
      },
      {
        name:'Bootstrap',
      },
      {
        name:'WordPress',
      },
      {
        name:'Heroku',
      },
      {
        name:'Sass',
      },
    ];

    window.addEventListener('load', this.coverAnimate);
    window.addEventListener('load', this.addAnimate);
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
