import { Component, OnInit } from '@angular/core';
import { ticket } from '../model/ticket.model';
import { SidebarService } from '../services/sidebar.service';
import { Router, RouterLink} from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-get-ticket',
  templateUrl: './get-ticket.component.html',
  styleUrls: ['./get-ticket.component.css']
})
export class GetTicketComponent implements OnInit {

  tick !:ticket[]  ;
  searchtext!: any;
  ticket = new ticket()
  constructor(private SidebarService: SidebarService, private router : Router) { }

  ngOnInit(): void {

    this.SidebarService.Ticketsrecus().subscribe( data => {

     this.tick=data
     console.log(data);
    }  );

  }
  supprimTicket(t: ticket)
  {
      let conf = confirm("Etes-vous sûr de supprimer ce ticket ?");
       if (conf)
           this.SidebarService.supprimerTicket(t.idTicket).subscribe(() => {
               console.log(" Ticket supprimé");
               alert("Ticket supprimé");
               this.SupprimTicketDuTableau(t);
              });
            }

  SupprimTicketDuTableau(t : ticket) {
     this.tick.forEach((cur, index) => {
         if(t.idTicket===cur.idTicket) {
             this.tick.splice(index, 1);
         }
     });
    }

}
