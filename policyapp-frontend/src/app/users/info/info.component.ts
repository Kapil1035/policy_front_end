import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.less']
})
export class InfoComponent implements OnInit {
  allStages = [
    {'name':'Quotes','level':1},
    {'name':'Owner Details','level':2},
    {'name':'Personal Details','level':3},
    {'name':'Vehicle Details','level':4},
    {'name':'Documents','level':5},
    {'name':'Payment','level':6}
  ];
  localData = {
    firstName:'',
    lastName:'',
    email:'',
    panCard:'',
    aadharCard:'',
    address1:'',
    address2:'',
    address3:'',
    rto:'',
    registrationNumber:''
  };
  currStage = null;
  constructor(public userService:UserService){}
  ngOnInit(): void {
    console.log(this.userService);
    this.currStage = this.allStages[4];
  }
  setStage(stage){
    for(let itr = 0;itr < Object.keys(this.localData).length;itr++){
      this.userService.data[Object.keys(this.localData)[itr]] = this.localData[Object.keys(this.localData)[itr]];
    }
    console.log(this.userService);
    this.currStage = this.allStages[stage-1];
  }
}
