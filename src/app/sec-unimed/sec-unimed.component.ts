import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ficha } from '../ficha';
import { FichaService } from '../ficha.service';
import { DataFichaService } from '../ficha-data.service';


@Component({
  selector: 'app-sec-unimed',
  templateUrl: './sec-unimed.component.html',
  styleUrls: ['./sec-unimed.component.scss']
})
export class SecUnimedComponent implements OnInit{

  fichas:  Observable<any> = new Observable<any>()

  constructor(private fichaDataService: DataFichaService, private fichaService: FichaService){
    console.log(this.fichas);
    
  }

  ngOnInit(){
    this.fichas = this.fichaService.getAll()
  }
  
  edit(ficha: ficha, key: string){
    this.fichaDataService.changeFicha(ficha, key)
  }

}
