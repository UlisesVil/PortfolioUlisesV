import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';

import { MatDialog } from '@angular/material/dialog';
import { ProjectDialogComponent } from '../../components/project-dialog/project-dialog.component';
declare var $:any;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {

  public projects: Project[];
  public url: string;

  constructor(
    private _projectService: ProjectService,
    public dialog: MatDialog

  ) {
      this.url = Global.url;
    }

  ngOnInit(){
    this.getProjects();


    
   
    
    


  }

  getProjects(){
    this._projectService.getProjects().subscribe(
      response => {
        if(response.projects){
          this.projects = response.projects;
        }
        
      },
      error => {
        console.log(<any>error);
        
      }
    );
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
    dialogRef.afterClosed().subscribe(res =>{
      console.log(res);
      if(res){
        console.log('esta es la res del dialog');
        
      }
    });
  }
  
}
