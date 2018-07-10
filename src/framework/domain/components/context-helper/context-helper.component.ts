import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-context-helper',
  templateUrl: './context-helper.component.html',
  styleUrls: ['./context-helper.component.scss']
})
export class AFContextHelperComponent implements OnInit {

  @Input() dataSource: any;
  @Input() settings: any;

  @Output() test = new EventEmitter<any>();

  constructor() {
    if (this.dataSource == undefined) {
      this.dataSource = {
        title: "帮助测试",
        content: "帮助的内容"
      }
    }
  }

  ngOnInit() {
  }
}
