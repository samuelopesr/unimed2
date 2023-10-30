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
  public codigo: any;
  public selectedItem: any;

  public openClose: boolean = false;

  constructor(
    private fichaDataService: DataFichaService,
    private fichaService: FichaService,
    private db: AngularFireDatabase
  ) {}

  public open() {
    if (this.openClose === false) {
      this.openClose = true;
    } else {
      this.openClose = false;
    }
  }

  ngOnInit() {
    this.fichas = this.fichaService.getAll();

    this.fichas.forEach((ficha) => {
      for (const key in ficha) {
        if (ficha.hasOwnProperty(key)) {
          this.codigo = ficha[key].codigoMaterial;
          console.log(this.codigo);

          this.selectedItem = this.fichaService.getItemByCode(this.codigo);

          console.log(this.selectedItem);
          if (this.selectedItem) {
            console.log(true);
          }
        }
      }
    });
  }
}