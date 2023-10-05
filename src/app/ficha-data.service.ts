import { Injectable } from '@angular/core';
import { ficha } from './ficha';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataFichaService {

  private fichaSource = new BehaviorSubject({
    ficha: new ficha(), 
    key: ''
  })

  currentFicha = this.fichaSource.asObservable()

  constructor() { }

  changeFicha(ficha: ficha, key:string) {
    this.fichaSource.next( 
      {
        ficha: ficha, key: key
      }
     )
  }
}
