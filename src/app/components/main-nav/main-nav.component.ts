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
  }

  menuOn(){
    $('#transparentWall').attr('style','background:rgba(0, 0, 0, 0.02); width: 100%; height: 100vh;');
    $('mat-toolbar').attr('style','background:red; height: 50px;');
  }

  menuOff(){
    $('#transparentWall').removeAttr('style','width: 100%; height: 100vh; ');
    $('mat-toolbar').removeAttr('style','display:none');  
    $('mat-toolbar').attr('style','background:rgba(0, 0, 0, 0.438) !important; height: 50px;');  
  }

}
