import { Component, OnInit } from '@angular/core';
import { Home } from "../home.model";
import { HomeService } from "../home.service";

@Component({
  selector: 'app-subhome-list',
  templateUrl: './subhome-list.component.html',
  styleUrls: ['./subhome-list.component.css']
})
export class SubhomeListComponent implements OnInit {
  homes:Home[];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homes = this.homeService.getHomes();
  }

}
