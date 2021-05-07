import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
//import { ViewDataService } from '../../services/view-data.service';
import { DownloadService } from '../../services/download.service';
import * as fileSaver from 'file-saver';
import swal from 'sweetalert';
import { onErrorResumeNext } from 'rxjs';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  //menuItem = null;
  fileName= 'UlisesVillaResume.pdf';

  constructor(
    public _MessageService: MessageService,
    private downloadService: DownloadService
    ) { }

  ngOnInit(): void {
    //this.menuItem = this.viewDataService.getMenuList()[3];
  }

  contactForm(form){
    this._MessageService.sendMessage(form).subscribe(()=>{
      swal("Thank You!!!", "I have received your message and I will contact you shortly.",'success');
    });
  }



  returnBlob(res): Blob{
    console.log('File Downloaded');
    return new Blob([res], {type: 'application/pdf'});
  }

  download(){
    this.downloadService.downloadFile(this.fileName).subscribe( res=> {
      if (res) {
        const url = window.URL.createObjectURL(this.returnBlob(res));
        window.open(url);
      }
    });
  }

  download2(){
    this.downloadService.downloadFile(this.fileName).subscribe( res=> {
      if (res) {
        fileSaver.saveAs(this.returnBlob(res), this.fileName);
      }
    });
  }




}
