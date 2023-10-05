import { Component, OnInit } from '@angular/core';
import { FichaService } from '../ficha.service';
import { DataFichaService } from '../ficha-data.service';
import { ficha } from '../ficha';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-mf',
  templateUrl: './mf.component.html',
  styleUrls: ['./mf.component.scss']
})
export class MfComponent implements OnInit{
  
  ficha: ficha = new ficha();
  key: string = ''; 
  step = 1;


  nextStep()
  {
    if (this.step <= 10)
    {
      this.step++
      console.log("step" + this.step);
      
    }
  }
  
  backStep()
  {
    if(this.step > 1)
    {
      this.step--
    }
  }

  constructor(private fichaService: FichaService, private fichaData: DataFichaService, private db: AngularFireDatabase){


    console.log(db.list.length);
    
    
    console.log(this.ficha);     
  }

  ngOnInit(){ 
    console.log(this.fichaData);
    
    console.log(this.fichaService);

    this.fichaData.currentFicha.subscribe(data => {
      if (data.ficha && data.key) {
        this.ficha = { ...data.ficha };
        this.key = data.key;
        console.log(data.ficha);
        
      }
    });
  }

  onSubmit() {

    console.log(this.ficha.nCarteira);
    
    if (this.key && this.ficha) {
      this.fichaService.update(this.ficha, this.key);   
    } else {
      if (this.step === 10) {
        this.fichaService.insert(this.ficha);
        
      }
    }

   
  }
  
}
