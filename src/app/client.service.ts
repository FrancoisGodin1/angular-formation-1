import { Injectable } from '@angular/core';
import { Client } from './shared/client';

@Injectable()
export class ClientService {
  private clients: Client[];
  constructor() {

    this.clients = [
      {
        nom: 'Jubin',
        prenom: 'Cedric',
        age: 54,
        ca: 120000,
        id: 10,
        dateAjout: new Date(2017, 6, 24)
      },
      {
        nom: 'Kezak',
        prenom: 'Anthony',
        age: 32,
        ca: 95000,
        id: 11,
        dateAjout: new Date(2017, 12, 12)
      },
      {
        nom: 'Jully',
        prenom: 'Guillaume',
        age: 24,
        ca: 78200,
        id: 12,
        dateAjout: new Date(2018, 1, 2)
      },
      {
        nom: 'Obra',
        prenom: 'Vincent',
        age: 45,
        ca: 45000,
        id: 13,
        dateAjout: new Date(2017, 1, 13)
      },
      {
        nom: 'Skolo',
        prenom: 'Nicolas',
        age: 34,
        ca: 780600,
        id: 14,
        dateAjout: new Date(2017, 1, 27)
      },
    ];

  }

  getClients(): Client[]{
    return this.clients;
  }
  getClient(id: number): Client{
    return this.clients.find(c => c.id == id);
  }
  deleteClient(id: number): Client[]{
    this.clients = this.clients.filter(c => c.id != id); 
    //affecte a notre tableau de clients le tableau de clients actuel avec les clients qui n'ont pas l'id specifié en param donc on vire le client a l'id spécifié
    return this.clients;
  }
  addClient(client: Client){
    client.id = Math.max(...this.clients.map(c => c.id))+1; // mappe le tableau de client en 1 tableau d'id des client et va prendre l'id le plus grand + 1
    // le "..." decompose le tableau d'id en plusieurs parametres number car la fonction math.max ne prend pas de tableau mais des param number
    this.clients.push(client); 
  }
}
