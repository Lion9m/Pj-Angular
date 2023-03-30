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
  constructor(public dialog: MatDialog){}

  openDialog(valor: string){
    let dialogRef = this.dialog.open(DialogExempleComponent, {
      data: {valor: valor}});
    dialogRef.afterOpened().subscribe(result => {
    });
  }

}
