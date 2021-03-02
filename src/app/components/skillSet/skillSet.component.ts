import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';
declare var $:any; 

@Component({
  selector: 'app-skillSet',
  templateUrl: './skillSet.component.html',
  styleUrls: ['./skillSet.component.css'],
  providers: [ProjectService, UploadService]
})
export class SkillSetComponent implements OnInit {

  public title: string;
  public project: Project;
  public save_project;
  public status: string;
  public filesToUpload: Array<File>;


  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService
  ) {
    this.title = "My Projects are powered by:";
    this.project = new Project('','','','',2020,'','');

   }

  ngOnInit(): void {

    $(function(){
      var elements=[
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

      //background-image: url(../../../assets/img/skills/0${index}.png);
      elements.forEach((item, index)=>{
        let element = `
          <div class="element">
            <div class="skillContainer">
              <img class="skillImg"
                src="assets/img/skills/0${index}.png" 
                title="${item.name}";
              />
            </div>
            <h2 class="skillName" style="text-align:center;">${item.name}</h2>
          </div>
        `;
        $(".post").append(element);
      });
    });

    
    function adjustWidth() {
      let width= $(window).width();
      console.log(width);
      if(width>853){
        $('.skillName').css('width','160px');
        $('.skillName').css('font-size','20px');
      }else if(width<=853){
          $('.skillName').css('width','110px');
          $('.skillName').css('font-size','15px');
          
      }
      $('.element').mouseover(function(){
        $(this).find('h2').css('display','block');
        
        let height=$(this).find('.skillContainer').css('width');
        
        console.log(height);
        $(this).find('h2').animate({height: height},'fast','swing');
        

      });
    
      $('.element').mouseleave(function(){
          $(this).find('h2').css('display','none');
        
         

          let height=$(this).find('.skillContainer').css('width');
          let heightStr=(parseInt(height.slice(0,(height.length-2)))*-1)+'px';
          console.log(heightStr);
          //console.log(height);
          $(this).find('h2').animate({height: heightStr},'fast','swing');
          
      });

    }
    window.addEventListener('resize', adjustWidth);
    $(document).ready(adjustWidth);
    
  }

  onSubmit(form){
    
    //Guardar los datos basicos
    this._projectService.saveProject(this.project).subscribe(
      response=>{
        console.log(response);
        if(response.project){
          

          //Subir la imagen
          if(this.filesToUpload){
            this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.project._id, [], this.filesToUpload, 'image')
            .then((result:any)=>{
                this.save_project= result.project;
                this.status = 'success';
                form.reset();
          });

          
        }else{
          this.save_project= response.project;
          this.status = 'success';
          form.reset();
        }

          
        }else{
          this.status = 'failed';
        }
      },
      error=> {
        console.log(<any>error); 
      }
    );
    
  }

  fileChangeEvent(fileInput: any){
    this.filesToUpload= <Array<File>>fileInput.target.files;
  }

  



}
