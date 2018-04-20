import { Component, OnInit } from '@angular/core';
import { Client } from './../shared/client';
import { Input } from '@angular/core';
import { ClientService } from './../client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})

export class ClientListComponent implements OnInit {

  //mClient = {nom: string, prenom: string, age: number, ca: number};
  //let client: Array<mClient>

  @Input() version: string;
  clients: Client[];
  clientSelected: Client;
  
 /* clients: Array<Client> = [
  {
    nom: 'Jubin',
    prenom: 'Cedric',
    age: 54,
    ca: 120000,
    id:10,
    dateAjout: new Date(2017,6,24)
  },
  {
    nom: 'Kezak',
    prenom: 'Anthony',
    age: 32,
    ca: 95000,
    id:11,
    dateAjout: new Date(2017,12,12)
  },
  {
    nom: 'Jully',
    prenom: 'Guillaume',
    age: 24,
    ca: 78200,
    id:12,
    dateAjout: new Date(2018,1,2)
  },
  {
    nom: 'Obra',
    prenom: 'Vincent',
    age: 45,
    ca: 45000,
    id:13,
    dateAjout: new Date(2017,1,13)
  },
  {
    nom: 'Skolo',
    prenom: 'Nicolas',
    age: 34,
    ca: 780600,
    id:14,
    dateAjout: new Date(2017,1,27)
  },
];*/

  constructor(private clientService: ClientService) {

   }

   getClients(){
     this.clients = this.clientService.getClients();
   }

  ngOnInit() {
    this.getClients();
  }

  setSelectedClient(client: Client){
    console.log(client);
    this.clientSelected = client;
  }

  deleteClient(id: number){
    this.clients = this.clientService.deleteClient(id);
    if(this.clientSelected && this.clientSelected.id === id)
      this.clientSelected = undefined;
  }
}
