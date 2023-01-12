import { Transferencia } from './../models/transferencia.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciasService {

  private url = "http://localhost:3000/transferencias"
  private listaTransferencias: any[]

  constructor(private httpClient: HttpClient) {
    this.listaTransferencias = []
  }

  get transferencias(){
    return this.listaTransferencias
  }

  todas(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url)
  }

  adicinar(transferencia: Transferencia): Observable<Transferencia>{
    this.hidratar(transferencia)

    return this.httpClient.post<Transferencia>(this.url, transferencia)
  }

  private hidratar(transferencia: any){
    transferencia.data = new Date()
  }
}
