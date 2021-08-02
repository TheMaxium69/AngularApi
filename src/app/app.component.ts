import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'JeSuisUnTitre';

  chucks:any = [];
  chuckTest:any = [{
    "categories":[]
  }];

  chucksFutur = [
    {"categories":[],"created_at":"2020-01-05 13:42:24.696555","icon_url":"https://assets.chucknorris.host/img/avatar/chuck-norris.png","id":"lulpsYvTQROW5q3GNJRVXQ","updated_at":"2020-01-05 13:42:24.696555","url":"https://api.chucknorris.io/jokes/lulpsYvTQROW5q3GNJRVXQ","value":"Hookers have nicknamed Chuck Norris \"hemorrhoid\" because of the residual pain in thier assholes."},
    {"categories":[],"created_at":"2020-01-05 13:42:23.880601","icon_url":"https://assets.chucknorris.host/img/avatar/chuck-norris.png","id":"7IS8z8uNQ_WBqBvFjW3xvg","updated_at":"2020-01-05 13:42:23.880601","url":"https://api.chucknorris.io/jokes/7IS8z8uNQ_WBqBvFjW3xvg","value":"Despite the fact that Chuck Norris doesn't book with Orbitz, they still send him a check when someone else books a hotel for a less."},
    {"categories":["money"],"created_at":"2020-01-05 13:42:30.730109","icon_url":"https://assets.chucknorris.host/img/avatar/chuck-norris.png","id":"H3dOPTjuS1y3v5Bf1-XQvQ","updated_at":"2020-05-22 06:16:41.133769","url":"https://api.chucknorris.io/jokes/H3dOPTjuS1y3v5Bf1-XQvQ","value":"Homeless people give money to Chuck Norris. The last time Chuck Norris went surfing off the coast of Florida he bit a shark. Chuck Norris doesn't have a problem with alcohol."}
  ]

  hideChucks(){
      this.chucks = [];
  }

  getJokeFromApi(){
    this.httpClient.get('https://api.chucknorris.io/jokes/random')
      .subscribe(LeChuckDeReponse => {
        this.chucks.push(LeChuckDeReponse);
    });
  }

  getJokeMoneyFromApi(){
    while (this.chuckTest.categories == "money") {
      this.httpClient.get('https://api.chucknorris.io/jokes/random')
        .subscribe(LeChuckDeReponse => {
          this.chuckTest.push(LeChuckDeReponse);
        });
      console.log(this.chuckTest.categories);
    }

  }

  constructor(private httpClient: HttpClient) { }

}



