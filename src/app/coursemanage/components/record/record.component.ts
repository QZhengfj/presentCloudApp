import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss'],
})
export class RecordComponent implements OnInit {

  constructor() { }

  public dao:any=0;
  ngOnInit() {}
  godao()
  {
    //判断心啊子啊
    this.dao=1;
  }
  dodao()
  {
    //这里有签到方式
    console.log('签到成功');
    //签到完去哪里

  }
}
