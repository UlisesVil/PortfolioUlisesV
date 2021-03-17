import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; //para poder hacer las peticioes AJAX
import { FormsModule } from '@angular/forms'; //Para utilizar el Chui Databinding
import { routing, appRoutingProviders } from './app-routing';



import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillSetComponent } from './components/skillSet/skillSet.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';
import { ResaltadoDirective } from './resaltado.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ProjectDialogComponent } from './components/project-dialog/project-dialog.component';
import { CertificationDialogComponent } from './components/certification-dialog/certification-dialog.component';
//import * as $ from 'jquery';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProjectsComponent,
    SkillSetComponent,
    ExperienceComponent,
    ErrorComponent,
    DetailComponent,
    EditComponent,
    ResaltadoDirective,
    MainNavComponent,
    ProjectDialogComponent,
    CertificationDialogComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDialogModule
  ],
  entryComponents: [
    ProjectDialogComponent,
    CertificationDialogComponent
  ],
  providers: [
    appRoutingProviders,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
