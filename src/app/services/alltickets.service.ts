import { Injectable } from '@angular/core';
import { ticket } from '../model/ticket.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})
export class AllticketsService {


  apiURL: string = 'http://localhost:8087/api/hdkticket' ;

  constructor(private http : HttpClient) { }

  listerTicket(): Observable<ticket[]>{

  return this.http.get<ticket[]>(this.apiURL);
    }


  ajouterTicket( t: ticket):Observable<ticket>{
      return this.http.post<ticket>(this.apiURL, t, httpOptions);
      }

  supprimerTicket(idTicket : number){
        const url =  `http://localhost:8087/api/hdkticket/${idTicket}`;
        return this.http.delete( url, httpOptions);
        }

}


