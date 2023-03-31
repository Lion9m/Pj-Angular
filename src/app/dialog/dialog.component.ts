import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogExempleComponent } from '../dialog-exemple/dialog-exemple.component';





@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  valor: string;
  animal: string ;
  constructor(public dialog: MatDialog){}

  openDialog(){
    let dialogRef = this.dialog.open(DialogExempleComponent, {
      data: {valor: this.valor, animal: this.animal}});
    dialogRef.afterClosed().subscribe(result => {
      this.animal = result;
      console.log(result.animal)
    });
  }

}
