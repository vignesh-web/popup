import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive, Routes } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { DialogComponent } from './dialog/dialog.component';
import { DialogModule } from './dialog/dialog.module';


@Component({
  
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  animal: string;
  name: string;

  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit() { }
  openDialog(): void {
    let dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      position: {
        top: '10vh'
      },
      data: { name: this.name, animal: this.animal }
    });
  this.router.navigate(['dialog/home'])
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}