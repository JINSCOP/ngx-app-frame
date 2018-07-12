import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class AFPaginatorComponent implements OnInit {
  selectedData:any;

  constructor() { }

  ngOnInit() {
  }

  onPageChange(){
    console.log(1);
  }
}
