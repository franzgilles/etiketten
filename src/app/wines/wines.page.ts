import { Component, OnInit } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { NavigateForward, NavigateBackward } from '@fivethree/ngxs-ionic-router-plugin';

@Component({
  selector: 'app-wines',
  templateUrl: './wines.page.html',
  styleUrls: ['./wines.page.scss'],
})
export class WinesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Dispatch()
  goToEtiketten = () => new NavigateForward('etiketten');

  @Dispatch()
  goToHome = () => new NavigateBackward('');

}
