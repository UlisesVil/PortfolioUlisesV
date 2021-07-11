import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
declare var $:any;

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})

export class MainNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    function removeWall(){
      $(".mat-drawer-backdrop").click(function(){
        $('#transparentWall').removeAttr('style','width: 100%; height: 100vh; ');
        $('mat-toolbar').removeAttr('style','background:red !important;');
        $('mat-toolbar').attr('style','background:rgba(0, 0, 0, 0.438) !important; height: 50px;');
      });
    }
    window.addEventListener('click',removeWall);



    $(document).ready(this.scrollToSection);

    $(document).ready(this.selectedMenu);
    window.addEventListener('scroll',this.selectedMenu);

  }

  selectedMenu(){
    let scrollHeight=$('html').scrollTop();
    let styles='color:yellowgreen; transform: scale(1.2);';

    let mainContentHeight=$('#mainContent').height()+parseInt($('#mainContent').css('padding-top'));
    let portfolioContentHeight=$('#portfolioContent').height()+parseInt($('#portfolioContent').css('padding-top'));
    let skillSetHeight=$('#skillSet').height()+parseInt($('#skillSet').css('padding-top'));
    let experienceHeight=$('#experience').height()+parseInt($('#experience').css('padding-top'));
    let contactContainerHeight=$('#contactContainer').height()+parseInt($('#contactContainer').css('padding-top'));

    scrollHeight <= mainContentHeight-50 ?
    $('.mainSection').attr('style', styles) :
    $('.mainSection').removeAttr('style', styles);

    (scrollHeight <= mainContentHeight+portfolioContentHeight-50)
      &&(scrollHeight>mainContentHeight-50) ?
    $('.projectSection').attr('style', styles) :
    $('.projectSection').removeAttr('style', styles);

    (scrollHeight <= mainContentHeight+portfolioContentHeight+skillSetHeight-50)
      &&(scrollHeight>mainContentHeight+portfolioContentHeight-50) ?
    $('.skillSection').attr('style', styles) :
    $('.skillSection').removeAttr('style', styles);

    (scrollHeight <= mainContentHeight+portfolioContentHeight+skillSetHeight+experienceHeight-50)
      &&(scrollHeight>mainContentHeight+portfolioContentHeight+skillSetHeight-50) ?
    $('.experienceSection').attr('style', styles) :
    $('.experienceSection').removeAttr('style', styles);

    (scrollHeight <= mainContentHeight+portfolioContentHeight+skillSetHeight+experienceHeight+contactContainerHeight-50)
      &&(scrollHeight>mainContentHeight+portfolioContentHeight+skillSetHeight+experienceHeight-50) ?
    $('.contactSection').attr('style', styles) :
    $('.contactSection').removeAttr('style', styles);
  }

  scrollToSection(){

    $('.mainSection').click(function(){
      $('html, body').animate({
        scrollTop: $("#mainContent").offset().top
      }, 4000);
    });

    $('.projectSection').click(function(){
      $('html, body').animate({
        scrollTop: $("#portfolioContent").offset().top
      }, 4000);
    });

    $('.skillSection').click(function(){
      $('html, body').animate({
        scrollTop: $("#skillSet").offset().top
      }, 4000);
    });

    $('.experienceSection').click(function(){
      $('html, body').animate({
        scrollTop: $("#experience").offset().top
      }, 4000);
    });

    $('.contactSection').click(function(){
      $('html, body').animate({
        scrollTop: $("#contactContainer").offset().top
      }, 4000);
    });
  }

  menuOn(){
    $('#transparentWall').attr('style','background:rgba(0, 0, 0, 0.02); width: 100%; height: 100vh;');
    $('mat-toolbar').attr('style','background:rgba(0, 0, 0, 0.438); height: 50px;');
  }

  menuOff(){
    $('#transparentWall').removeAttr('style','width: 100%; height: 100vh; ');
    $('mat-toolbar').removeAttr('style','display:none');
    $('mat-toolbar').attr('style','background:rgba(0, 0, 0, 0.438) !important; height: 50px;');
  }

}
