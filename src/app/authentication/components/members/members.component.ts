import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { Ng2IzitoastService } from 'ng2-izitoast';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  address:string;
  email:string;
  fullName:string;
  total:number;
  userId:number;
  userName:string;


  tutorials: any;
  currentTutorial = null;
  currentIndex = -1;

  page = 1;
  count = 0;
  pageSize = 10;
  pageSizes = [3, 6, 9];

  constructor(private auth:AuthService, private iziToast: Ng2IzitoastService ) { }

  ngOnInit() {
    this.retrieveTutorials();
  }

 
  
  getRequestParams(offset, limit): any {
    // tslint:disable-next-line:prefer-const
    let params = {};

    if (offset) {
      params[`offset`] = offset - 1;
    }

    if (limit) {
      params[`limit`] = limit;
    }

    return params;
  }

  retrieveTutorials(): void {
    const params = this.getRequestParams(this.page, this.pageSize);

    this.auth.getAll(params).subscribe(
      (data) => {
       this.tutorials = data.data.content;
       this.count = data.data.totalElements;
      }, (err) => {
        console.log(err);
      }
    );
  }

  handlePageChange(event): void {
    this.page = event;
    this.retrieveTutorials();
  }

  handlePageSizeChange(event): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveTutorials();
  }

  detail(data){
    this.address=data.address;
    this.email = data.email;
    this.fullName = data.fullName;
    this.total = data.total;
    this.userId = data.userId;
    this.userName = data.userName;
    
  }

  blockUser(id){
    this.auth.changeStatus(id,1).subscribe(
      (et)=>{
        this.iziToast.success({
          title: 'Chặn người dùng!',
          message: 'Chặn người dùng thàng công!',
          position: 'topRight'
        });
        this.retrieveTutorials();
      }
    );
  }

  unBlock(id){
    this.auth.changeStatus(id,0).subscribe(
      (et)=>{
        this.iziToast.success({
          title: 'Mở chặn người dùng!',
          message: 'Mở chặn người dùng thàng công!',
          position: 'topRight'
        });
        this.retrieveTutorials();
      }
    );
  }


}
