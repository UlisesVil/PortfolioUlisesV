import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
declare var $:any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css','./mainGlitch.component.css']
})
export class MainComponent implements OnInit {

  public title: string;
  public subtitle: string;
  public videoTag;

  constructor(
    private sanitizer: DomSanitizer
  ) {
    this.title = "Ulises Villa";
    this.subtitle="Web Developer";
    this.videoTag = this.getVideoTag();
  }

  ngOnInit(): void {

    $(document.body).on('click', 'a[href*="#"]', function(e) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: $(this.hash).offset().top
      }, 3000);
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

    $(window).on('scroll', function() {
      if ($(window).scrollTop() + $(window).height() > $('#mainContainer').outerHeight()+100) {
        $('.downArrow').hide();
      } else {
        $('.downArrow').show();
      }
    });
  }

  private getVideoTag() {
    return this.sanitizer.bypassSecurityTrustHtml(
      `<video id="vid" class="full-image" muted loop autoplay playsinline disableRemotePlayback>
        <source src="assets/vids/016.mp4" type="video/mp4"/>
        Your browser does not support HTML5 video.
      </video>`
    );
  }
}
