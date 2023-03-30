import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';


@Component({
  selector: 'app-dialog-exemple',
  templateUrl: './dialog-exemple.component.html',
  styleUrls: ['./dialog-exemple.component.css']
})

export class DialogExempleComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {

  }
}
