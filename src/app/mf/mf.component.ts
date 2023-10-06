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
  
  guiaDoPaciente = 0
  ficha: ficha = new ficha();
  key: string = ''; 
  step = 1;
 
  val = false

  newNome = '' as string
  newQtde = '' as string

  addMaterial(nome: string, quantidade: string)
  {
    this.ficha.materiais.push({
      nome, 
      quantidade
    })

  this.newNome = '';
  this.newQtde = '';

  }

  remove(index: number) {
    if (index >= 0 && index < this.ficha.materiais.length) {
      this.ficha.materiais.splice(index, 1); 
    }
  }
  

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

  constructor(private fichaService: FichaService, private fichaData: DataFichaService){ 
  }

  ngOnInit(){ 
    this.fichaData.currentFicha.subscribe(data => {
      if (data.ficha && data.key) {
        this.ficha = { ...data.ficha };
        this.key = data.key;
        console.log(data.ficha);
      }
    });
  }

  onSubmit() {

    if (this.key && this.ficha) {
      this.fichaService.update(this.ficha, this.key);   
    } else {
      if (this.step === 4) {
        this.fichaService.insert(this.ficha);
        this.val = true
          if(this.val === true)
          {
            this.nextStep()
          }
      }
    }

   
  }
  
}
