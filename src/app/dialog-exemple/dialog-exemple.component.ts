import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';


@Component({
  selector: 'app-dialog-exemple',
  templateUrl: './dialog-exemple.component.html',
  styleUrls: ['./dialog-exemple.component.css']
})

export class DialogExempleComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogExempleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {valor: string,animal:string},
  ) {
  }

  onNoClick(): void {
    this.dialogRef.close();

  }
}
