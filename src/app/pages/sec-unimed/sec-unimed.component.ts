import { Component } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { ficha } from 'src/app/ficha';
import { DataFichaService } from 'src/app/ficha-data.service';
import { FichaService } from 'src/app/ficha.service';

@Component({
  selector: 'app-sec-unimed',
  templateUrl: './sec-unimed.component.html',
  styleUrls: ['./sec-unimed.component.scss'],
})
export class SecUnimedComponent {
  fichas: Observable<any> = new Observable<any>();

  
  
  codigoMaterial: any = this.fichas.forEach((ficha) => {
    for (const i of ficha) {
     return i.codigoMaterial
    }
  });

  selectedItem: any = this.fichaService.getItemByCode(this.codigoMaterial)

  constructor(
    private fichaDataService: DataFichaService,
    private fichaService: FichaService,
    private db: AngularFireDatabase
  ) {}

  teste() {
    this.fichas.forEach((ficha) => {
      for (const item of ficha) {
        console.log(item.codigoMaterial);
        
      }
    });

  }

  // showCode(code: number) {
  //   this.selectedItem = this.fichaService.getItemByCode(code);

  //   if (this.selectedItem) {
  //     console.log(this.selectedItem);
  //   }
  // }

  ngOnInit() {
    this.fichas = this.fichaService.getAll();
  }
}
