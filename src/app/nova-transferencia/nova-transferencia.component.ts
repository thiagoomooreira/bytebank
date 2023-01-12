import { Transferencia } from './../models/transferencia.model';
import { TransferenciasService } from './../services/transferencias.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTranferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number = 0;
  destino: number = 0;

  constructor(private service: TransferenciasService){

  }

  tranferir() {

    const Transferencia: Transferencia = { valor: this.valor, destino: this.destino }

    this.service.adicinar(Transferencia).subscribe(
      (resultado) =>{
        console.log(resultado);
        this.limparCampos()
      },
      (error) =>{
        console.error(error);
      }
    );
  }

  limparCampos(){
    this.valor = 0
    this.destino = 0
  }
}
