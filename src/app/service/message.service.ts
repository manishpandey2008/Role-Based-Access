import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { Status } from '../model/status';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  veiwMessage(message:any,status:any){
    if(status==Status.SUCCESS){this.showSuccessMessage(message)}
    if(status==Status.WARNING){this.showErrorMessage(message)}
  }

  private showSuccessMessage(meaasge:any){
    Swal.fire({
      icon: 'success',
      title: 'Congrats...',
      text: meaasge
    })
  }

  private showErrorMessage(meaasge:any){
    Swal.fire({
      icon: 'warning',
      title: 'Oops...',
      text: meaasge
    })
  }

}
