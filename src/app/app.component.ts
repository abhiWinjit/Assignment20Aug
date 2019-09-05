import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment20Aug';

  loadedFeature = 'home';
  onNavigation(feature2:string){
    this.loadedFeature = feature2;
  }
}


