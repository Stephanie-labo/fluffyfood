import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
@Input() header:string='Locatie gegevens';
@Input() body:string='Mogen wij gebruik maken van uw locatie gegevens om het weerbericht op te halen van uw locatie?';
@Output() acceptUseCurrentLocation = new EventEmitter<boolean>();

  close(){
       const dialog= document.getElementById("dialog") as HTMLDialogElement
    dialog.close()
  }
  
 open(){
  
    const dialog= document.getElementById("dialog") as HTMLDialogElement
    dialog.showModal()
  
  }
  getData(){
    this.acceptUseCurrentLocation.emit(true)
  }
}
