import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public title: string;
  public subtitle: string;

  constructor() { 
    this.title = "Ulises Villa";
    this.subtitle="Web Developer";
  }

  ngOnInit(): void {
    
    $(document.body).on('click', 'a[href*="#"]', function(e) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: $(this.hash).offset().top
      }, 900);
    });
    
    function mainScroll() {
      var scrolled = document.documentElement.scrollTop;
      var height = $(window).height();
      if (scrolled < height) {
        $('.full-image').css({
          'top': -scrolled * .5
        });
      }
    };
    
    window.addEventListener('scroll',mainScroll);
  }

}