import { Injectable } from '@angular/core';
import { ficha } from './ficha';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { map } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class FichaService {

  private dbPath = '/dbMateriais'
  itemsRef: AngularFireList<any>
  itemsIndex: {[ key: number ]: any} = {}

  insert(ficha: ficha){
    this.database.list('ficha').push(ficha).then((result:any) => {
      console.log(ficha);
    })
  }

  update(ficha: ficha, key: string){
    this.database.list('ficha').update(key, ficha).catch((err: any) => {
      console.error(err);
      
    })
  }


  getItemByCode(code: number) {
    return this.itemsIndex[code];
  }

  getItem()
  {
    return this.itemsRef.snapshotChanges().pipe(
      map(changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }));
      })
    );
  }
 
  getAll(){
    return this.database.list('ficha')
    .snapshotChanges().pipe(
      map(changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val() as ficha
        }))
      })
    )


  }

  

  constructor(public database: AngularFireDatabase) { 
    this.itemsRef = database.list(this.dbPath);
    this.getItem().subscribe((items) => {
      this.itemsIndex = {};
      items.forEach((item) => {
        this.itemsIndex[item.Codigo] = item
      })
    })

    
  }

  
}
