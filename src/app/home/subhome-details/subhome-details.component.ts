import { Component, OnInit, Input } from '@angular/core';
import { HomeService } from "../home.service";
import { Home } from '../home.model'

@Component({
  selector: 'app-subhome-details',
  templateUrl: './subhome-details.component.html',
  styleUrls: ['./subhome-details.component.css']
})
export class SubhomeDetailsComponent implements OnInit {

  @Input() home: Home;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
  }

}
