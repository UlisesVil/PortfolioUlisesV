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
    this.title = "My Projects are powered by:";
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
        },{
          name:'PHP',
        },
        {
          name:'Laravel',
        },
        {
          name:'Simfony',
        },{
          name:'My SQL',
        },
        {
          name:'npm',
        },
        {
          name:'Git Hub',
        },{
          name:'Git GUI',
        },
        {
          name:'Visual Studio Code',
        },
        {
          name:'Net Beans',
        },{
          name:'Postman',
        },
        {
          name:'Bootstrap',
        },
        {
          name:'WordPress',
        },
        {
          name:'TypeScript',
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
    console.log(cardCover);
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
    console.log(cards);
    cards.forEach((card) => {
      $('.element').mouseenter(function(){
        let randomNumber=Math.floor(Math.random()*Math.floor(6));
        console.log(randomNumber);
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





/*
function adjustWidth() {
      let width= $(window).width();
      if(width>853){
        $('.skillName').css('width','160px');
        $('.skillName').css('font-size','20px');
      }else if(width<=853){
          $('.skillName').css('width','110px');
          $('.skillName').css('font-size','15px');
      };

      $('.element').mouseover(function(){
        $(this).find('h2').css('display','block');
        let height=$(this).find('.skillContainer').css('width');
        $(this).find('h2').animate({height: height},'fast','swing');
      });
    
      $('.element').mouseleave(function(){
        $(this).find('h2').css('display','none');
        let height=$(this).find('.skillContainer').css('width');
        let heightStr=(parseInt(height.slice(0,(height.length-2)))*-1)+'px';
        $(this).find('h2').animate({height: heightStr},'fast','swing');
      });
    }
    window.addEventListener('resize', adjustWidth);
    $(document).ready(adjustWidth);


*/