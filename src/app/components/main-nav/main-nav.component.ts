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




  transparentWallOff(){
    $('#transparentWall').attr('style','background:red; width: 100%; height: 100vh;');
    $('mat-toolbar').attr('style','background:red;');
    console.log('me llega');
    
  }


  attrRemove(){
    $('#transparentWall').removeAttr('style','background:red; width: 100%; height: 100vh; ');
    $('mat-toolbar').removeAttr('style','background:red; display:none');    
  }

}
