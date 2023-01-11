import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciasService {

  private listaTransferencias: any[]
  constructor() {
    this.listaTransferencias = []
  }

  get transferencias(){
    return this.listaTransferencias
  }

  adicinar(transferencia: any){
    this.hidratar(transferencia)
    this.listaTransferencias.push(transferencia)
  }

  private hidratar(transferencia: any){
    transferencia.data = new Date()
  }
}
