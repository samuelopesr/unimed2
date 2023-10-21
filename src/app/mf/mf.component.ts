import { Component, OnInit } from '@angular/core';
import { FichaService } from '../ficha.service';
import { DataFichaService } from '../ficha-data.service';
import { ficha } from '../ficha';

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

  newQtde = '' as string

  searchCode: number = 0;
  selectedItem: any;
  items: any[] = [];

  addMaterial(codigo: number, quantidade: string)
  {
    this.ficha.materiais.push({
      codigo, 
      quantidade
    })

    codigo = this.searchCode

    this.selectedItem = this.fichaService.getItemByCode(codigo);
      if (this.selectedItem) {
        console.log('Item encontrado:', this.selectedItem);
      } else {
        console.log('Item não encontrado');
      }

 
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
    this.fichaService.getItem().subscribe((items) => {
      this.items = items;
    });
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

  // getItem()
  // {
  //   this.selectedItem = this.fichaService.getItemByCode(this.searchCode);
  //     if (this.selectedItem) {
  //       console.log('Item encontrado:', this.selectedItem);
  //     } else {
  //       console.log('Item não encontrado');
  //     }
  // }

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
