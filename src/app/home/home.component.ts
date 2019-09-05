import { Component, OnInit } from '@angular/core';
import { Home } from "./home.model";
import { HomeService } from "./home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {
  selectedHome: Home;


  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.subHomeSelected
    .subscribe(
      (home:Home)=>{
        this.selectedHome = home;
      }
    );
  }

}
