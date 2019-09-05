import { Component, OnInit, Input } from '@angular/core';
import { Home } from "../../home.model";
import { HomeService } from "../../home.service";

@Component({
  selector: 'app-subhome-item',
  templateUrl: './subhome-item.component.html',
  styleUrls: ['./subhome-item.component.css']
})
export class SubhomeItemComponent implements OnInit {
@Input() home : Home;

  constructor(private homeService: HomeService) { }


  ngOnInit() {
  }


  onSelected(){
    this.homeService.subHomeSelected.emit(this.home);
  }
}
