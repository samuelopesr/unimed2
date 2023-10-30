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
  public selectedItem: any 
  c: any 
  constructor(
    private fichaDataService: DataFichaService,
    private fichaService: FichaService,
    private db: AngularFireDatabase,
     ) {
      const codRef = this.db.list('dbMateriais')
      const outroRef = this.db.list('ficha')
      console.log(codRef);

      codRef.valueChanges().subscribe(items => 
        {
          console.log(items);
          for (const item of items) {
            this.selectedItem.Codigo = item
            
            
          }
        })


      

      // codRef.valueChanges().subscribe(items => 
      //   {
      //     for (const key in items) {
      //       if (Object.prototype.hasOwnProperty.call(items, key)) {
      //         let element: any = items[key]
      //         console.log(key, element[1]);
              
      //       }
            
      //     }
      //     // this.selectedItem = this.fichaService.getItemByCode();
      //   })
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