import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-screens',
  templateUrl: './list-screens.component.html',
  styleUrls: ['./list-screens.component.scss']
})
export class ListScreensComponent implements OnInit {

  private _screenList: Array<TheaterScreen>;
  get screenList(): Array<TheaterScreen> {
    return this._screenList;
  }
  public ScreenName: string;
  public ScreenTitle: string;
  public ScreenTime: string;
  constructor() {
    this.ScreenName = 'ScreenName';
    this.ScreenTitle = 'ScreenTitle';
    this.ScreenTime = 'ScreenTime';
    this._screenList =  [];
  }

  ngOnInit() {
    this._screenList.push({screenName: 'S1', screenTitle: 'NKP', screenTime: '3:30pm'});
    this._screenList.push({screenName: 'S2', screenTitle: 'Jackpot', screenTime: '3:30pm'});
    this._screenList.forEach(item => {
      console.log('item', item.screenName);
    });
  }

}
