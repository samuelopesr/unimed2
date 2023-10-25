import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { DataFichaService } from 'src/app/ficha-data.service';
import { FichaService } from 'src/app/ficha.service';




@Component({
  selector: 'app-sec-unimed',
  templateUrl: './sec-unimed.component.html',
  styleUrls: ['./sec-unimed.component.scss']
})
export class SecUnimedComponent {
  fichas:  Observable<any> = new Observable<any>()
  
  public sidebarShow: boolean = true;

  
  constructor(private fichaDataService: DataFichaService, private fichaService: FichaService,private db: AngularFireDatabase){
  }
  

  ngOnInit(){
    this.fichas = this.fichaService.getAll()
  }
}
