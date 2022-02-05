import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  FormData: FormGroup;

  constructor(private builder: FormBuilder, private contact: ContactService,private _snackBar: MatSnackBar) { }
  @Input() screenSize;
  ngOnInit(): void {
    this.FormData = this.builder.group({
      fullname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      comment: new FormControl('', [Validators.required])
    })
  }



  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action,
      {
        duration: 2000
      }
      );
  }

  
  onSubmit(FormData) {

    const templateParams = {
      name: FormData.fullname,
      email: FormData.email,
      message: FormData.comment
  };

  var data = {
    service_id: 'service_c1v8ygl',
    template_id: 'template_kqr4r1o',
    user_id: 'user_0YExjRBIbt7iorilBHzUi',
    template_params: templateParams
};

    console.log(FormData);
   
    this.contact.sendEmail(data).subscribe(x => {
      console.log(x);
      if(x.status == 200){
        this.openSnackBar("Message Sent! Divyansh will respond soon!","OK");
      }
      this.FormData.reset();
    },
    (error) => {
       console.log(error);
       if(error.status == 200){
        this.openSnackBar("Message Sent! Divyansh will respond soon!","OK");
      }else{
        this.openSnackBar("Message Failed!","OK");
      }
      this.FormData.reset();
       // get the status as error.status
    }) ;
    
  }
}
