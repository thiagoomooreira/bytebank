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

  tranferir() {
    console.log(
      'Nova Tranferencia no valor de R$' +
        this.valor +
        ' para a conta ' +
        this.destino
    );

    this.aoTransferir.emit({ valor: this.valor, destino: this.destino });

    this.limparCampos()
  }

  limparCampos(){
    this.valor = 0
    this.destino = 0
  }
}
