import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import swal from 'sweetalert';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor(public _MessageService: MessageService) {
  }

  ngOnInit(): void {
  }

  contactForm(form){
    this._MessageService.sendMessage(form).subscribe(()=>{
      swal("Thank You!!!", "I have received your message and I will contact you shortly.",'success');
    });
  }

}
