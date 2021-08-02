import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApi';

  chucks = [
    {"categories":[],"created_at":"2020-01-05 13:42:24.696555","icon_url":"https://assets.chucknorris.host/img/avatar/chuck-norris.png","id":"lulpsYvTQROW5q3GNJRVXQ","updated_at":"2020-01-05 13:42:24.696555","url":"https://api.chucknorris.io/jokes/lulpsYvTQROW5q3GNJRVXQ","value":"Hookers have nicknamed Chuck Norris \"hemorrhoid\" because of the residual pain in thier assholes."},
    {"categories":[],"created_at":"2020-01-05 13:42:23.880601","icon_url":"https://assets.chucknorris.host/img/avatar/chuck-norris.png","id":"7IS8z8uNQ_WBqBvFjW3xvg","updated_at":"2020-01-05 13:42:23.880601","url":"https://api.chucknorris.io/jokes/7IS8z8uNQ_WBqBvFjW3xvg","value":"Despite the fact that Chuck Norris doesn't book with Orbitz, they still send him a check when someone else books a hotel for a less."}
  ]
}



