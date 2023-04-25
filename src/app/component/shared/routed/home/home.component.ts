
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {




  constructor(
    
  ) { 

    console.log("hola home")
  }

  ngOnInit(): void {
  }

  openModal(e: any): void {
    console.log(e);
    alert("hola mundo");
  }

  openModal2(e: any): void {
    console.log(e);
    console.log(e.data);

  }




}
