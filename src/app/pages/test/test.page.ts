import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PostServiceService } from 'src/app/provider/post-service.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage  {
  
  arrayPosts:any;

  constructor(public navCtrl: NavController, public postServices:PostServiceService ) { }

  ionViewDidLoad() {
    this.getPosts();//Llamamos a la función getPost cuando la vista se cargue
  }
  getPosts() { //llamamos a la funcion getPost de nuestro servicio.
    this.postServices.getPosts()
    .then(data => {
      this.arrayPosts = data;
    });
  }
  

}
