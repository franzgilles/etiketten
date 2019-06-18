import { Component, OnInit } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { NavigateBackward } from '@fivethree/ngxs-ionic-router-plugin';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-etiketten',
  templateUrl: './etiketten.page.html',
  styleUrls: ['./etiketten.page.scss'],
})
export class EtikettenPage implements OnInit {


  constructor() { }

  ngOnInit() {
  }



  @Dispatch()
  goToShop = () => new NavigateBackward('');
  @Dispatch()
  goToWines = () => new NavigateBackward('wines');

}

