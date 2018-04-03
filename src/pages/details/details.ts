import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import {
  InAppBrowser,
  InAppBrowserOptions
} from "@ionic-native/in-app-browser";

@IonicPage()
@Component({
  selector: "page-details",
  templateUrl: "details.html"
})
export class DetailsPage {
  data: any;
  item: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private inAppBrowser: InAppBrowser
  ) {
    this.data = navParams.get("post");
  }

  openSource() {
    const options: InAppBrowserOptions = {
      location : 'yes',//Or 'no' 
      hidden : 'no', //Or  'yes'
      clearcache : 'yes',
      clearsessioncache : 'yes',
      zoom : 'yes',//Android only ,shows browser zoom controls 
      hardwareback : 'yes',
      mediaPlaybackRequiresUserAction : 'no',
      shouldPauseOnSuspend : 'no', //Android only 
      closebuttoncaption : 'Close', //iOS only
      disallowoverscroll : 'no', //iOS only 
      toolbar : 'yes', //iOS only 
      enableViewportScale : 'no', //iOS only 
      allowInlineMediaPlayback : 'no',//iOS only 
      presentationstyle : 'pagesheet',//iOS only 
      fullscreen : 'yes',//Windows only
    };
    this.inAppBrowser.create(this.data.url, "_blank", options);
  }
}
