import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }

  numero: number = 1;


  somar(){
    this.numero +=1;
  }

  subtrair(){
    if (this.numero === 1) {
      this.numero =1;

    } else {
      this.numero -=1;

    }
  }

  acaoOperacao( valor:number ){
    this.numero +=valor;
  }


  ngOnInit(): void {
  }

}
