import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [RemoteServiceProvider]
})
export class HomePage {

  postList : any;

  constructor(public navCtrl: NavController, public remoteServiceProvider: RemoteServiceProvider, private loadingCtrl: LoadingController) {
    let loading = this.loadingCtrl.create({
      content: 'Please Wait...'
    });
    loading.present();
    this.getPostList();
    loading.dismiss();
  }

  getPostList(){
    this.remoteServiceProvider.getPosts().subscribe((data)=>{
      this.postList = data;
    });
  }

  loadOtherPage(post){
    this.navCtrl.push('DetailsPage', {post: post});
  }
}
