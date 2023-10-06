import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { DataFichaService } from 'src/app/ficha-data.service';
import { FichaService } from 'src/app/ficha.service';


@Component({
  selector: 'app-orcamento',
  templateUrl: './orcamento.component.html',
  styleUrls: ['./orcamento.component.scss']
})
export class OrcamentoComponent {
  fichas:  Observable<any> = new Observable<any>()

  

  constructor(private fichaDataService: DataFichaService, private fichaService: FichaService,private db: AngularFireDatabase){

    
  }
  

  ngOnInit(){
    this.fichas = this.fichaService.getAll()
  }
}
