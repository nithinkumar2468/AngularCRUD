import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-sample',
  templateUrl: './pipe-sample.component.html',
  styleUrls: ['./pipe-sample.component.css']
})
export class PipeSampleComponent {
  name!: string;
  price!:number;
  date = new Date();
}