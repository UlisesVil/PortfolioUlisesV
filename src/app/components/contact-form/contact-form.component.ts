import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { DownloadService } from '../../services/download.service';
import * as fileSaver from 'file-saver';
import swal from 'sweetalert';
declare var $:any;

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  fileName= 'UlisesVillaResume.pdf';

  constructor(
    public _MessageService: MessageService,
    private downloadService: DownloadService
  ) { }

  ngOnInit(): void {
  }

  contactForm(form){
    this._MessageService.sendMessage(form).subscribe(()=>{
      swal("Thank You!!! "+form.name+' '+form.lastName, "I have received your message and I will contact you shortly.",'success');
    });
    $('#emailLabel').removeClass("noEmpty");
  }

  returnBlob(res): Blob{
    return new Blob([res], {type: 'application/pdf'});
  }

  viewDocument(){
    this.downloadService.downloadFile(this.fileName).subscribe( res=> {
      if (res) {
        const url = window.URL.createObjectURL(this.returnBlob(res));
        window.open(url);
      }
    });
  }

  downloadDocument(){
    this.downloadService.downloadFile(this.fileName).subscribe( res=> {
      if (res) {
        fileSaver.saveAs(this.returnBlob(res), this.fileName);
      }
    });
  }

  addClass(){
    if( $('#email').val() !== ""){
      $('#emailLabel').addClass("noEmpty");
    }else{
      $('#emailLabel').removeClass("noEmpty");
    }
  }
}
