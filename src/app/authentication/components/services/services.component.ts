import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DichvuService } from 'src/app/services/dichvu.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  data:any;
  constructor(private router:Router, private dichvu:DichvuService) { }

  ngOnInit() {
    this.dichvu.getAllServices().subscribe(
      (et)=>{
        this.data = et.data;
        console.log(et);
      }
    );
  }

}
