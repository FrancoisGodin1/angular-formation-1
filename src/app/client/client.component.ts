import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  mClient = {prenom: 'Guillaume', age: 24};

  constructor() {
   }
   get taille(): string{
     return this.mClient.age +'px';
   }
   get tailleImg(): string{
     return this.mClient.age * 10 + 'px';
   }
   ajouter(): void{
     this.mClient.age++;
   }
   enlever(): void{
     this.mClient.age--;
   }

  ngOnInit() {
  }

}
