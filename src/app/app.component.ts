import { Component } from '@angular/core';
import { SubRedditServiceService as SubRedditService } from './sub-reddit.service';
import { Convert, SubReddit } from './SubReddit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SubRedditService]
})
export class AppComponent {
  title = 'RedditAPIApp';
  subReddit: SubReddit = {};

  constructor(private subRedditAPI: SubRedditService){}

  GetSubReddit(){
    this.subRedditAPI.DisplaySubReddit().subscribe(
      (response:any) => {
        console.log(response);
        let postjson = Convert.subRedditToJson(response);
        let subReddit = Convert.toSubReddit(postjson);
        console.log(subReddit);
        this.subReddit = subReddit;

      }
    );
  }
}
