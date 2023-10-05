import { Injectable } from '@angular/core';
import { ficha } from './ficha';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class FichaService {

  insert(ficha: ficha){
    this.database.list('ficha').push(ficha).then((result:any) => {
      console.log(result.key);
    })
  }

  update(ficha: ficha, key: string){
    this.database.list('ficha').update(key, ficha).catch((err: any) => {
      console.error(err);
      
    })
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

  constructor(public database: AngularFireDatabase) { }

  
}
