import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from
'@awesome-cordova-plugins/barcode-scanner/ngx';



@Component({
  selector: 'app-codigo-qr',
  templateUrl: './codigo-qr.page.html',
  styleUrls: ['./codigo-qr.page.scss'],
})
export class CodigoQRPage implements OnInit {

  code:any
  

  constructor(private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
  }

  scannerQr(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.code = barcodeData.text
    console.log('Barcode data', barcodeData);
    }).catch(err => {
    console.log('Error', err);
    })
    }

  

}
