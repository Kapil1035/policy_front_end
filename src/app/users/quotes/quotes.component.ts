import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.less']
})
export class QuotesComponent implements OnInit {
  currentUser = true;
  ncbAmount = [
    0,
    20,
    25,
    35,
    45
  ];
  secondaryDetails = {
    ncb:'',
    manufacturingDate:'',
    previousPolicyExpiry:'',
    registrationDate:'',
    previousPolicy:'',
    previousPolicyClaimed:false
  };
  constructor(public userService:UserService) { }

  ngOnInit(): void {
  }
  handleQuotesData(){
    for(let itr = 0;itr < Object.keys(this.secondaryDetails).length;itr++){
      this.userService.data[Object.keys(this.secondaryDetails)[itr]] = this.secondaryDetails[Object.keys(this.secondaryDetails)[itr]];
    }
    this.currentUser = !this.currentUser;
  }

}
