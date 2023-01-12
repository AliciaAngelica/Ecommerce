import { ElementDialogComponent } from './../../shared/element-dialog/element-dialog.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';


export interface Products {
  productName: string;
  price: number;
  promotionPrice: number;
  stock: number;
  visible: number;
  description: string;

}

const ELEMENT_DATA: Products[] = [
  {productName: 'Hydrogen', price: 1.0079, promotionPrice: 1.0070, stock: 1, visible: 1, description: 'xxxxxxxxxx'},
  {productName: 'Helium', price: 4.0026, promotionPrice: 1.0070, stock: 1, visible: 1 , description: 'xxxxxxxxxx'},
  {productName: 'Lithium', price: 6.941, promotionPrice: 1.0070, stock: 1, visible: 1, description: 'xxxxxxxxxx'},
  {productName: 'Beryllium', price: 9.0122, promotionPrice: 1.0070, stock: 1, visible: 1, description: 'xxxxxxxxxx'},
  {productName: 'Boron', price: 10.811, promotionPrice: 1.0070, stock: 1, visible: 1, description: 'xxxxxxxxxx'},
  {productName: 'Carbon', price: 12.0107, promotionPrice: 1.0070, stock: 1, visible: 1, description: 'xxxxxxxxxx'},
  {productName: 'Nitrogen', price: 14.0067, promotionPrice: 1.0070, stock: 1, visible: 1, description: 'xxxxxxxxxx'},
  {productName: 'Oxygen', price: 15.9994, promotionPrice: 1.0070, stock: 1, visible: 1, description: 'xxxxxxxxxx'},
  {productName: 'Fluorine', price: 18.9984, promotionPrice: 1.0070, stock: 1, visible: 1, description: 'xxxxxxxxxx'},
  {productName: 'Neon', price: 20.1797, promotionPrice: 1.0070, stock: 1, visible: 1, description: 'xxxxxxxxxx'},
];

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})

export class PainelComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<any>
  displayedColumns: string[] = ['productName', 'price', 'promotionPrice', 'stock', 'visible', 'action'];
  dataSource = ELEMENT_DATA;


  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {

  }

  openNewProduct(element: Products | null): void {
    const dialogRef = this.dialog.open(ElementDialogComponent, {
      height: '50%',
      width: '50%',
      data: element === null ? {
        productName: '',
        price: null,
        promotionPrice: null,
        stock: null,
        visible: null,
      } : element
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result !== undefined) {
        this.dataSource.push(result);
        this.table.renderRows();
      }

    });

  }



}
