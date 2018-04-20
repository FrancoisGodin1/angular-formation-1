import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Client } from '../shared/client';
import { ClientService } from './../client.service';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css']
})
export class ClientAddComponent implements OnInit {

  clientForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private clientService: ClientService) {

      this.clientForm = formBuilder.group({
        prenom: formBuilder.control(''),
        nom: formBuilder.control(''),
        age: formBuilder.control(''),
        ca: formBuilder.control('')
      });
   }

  ngOnInit() {
  }

  ajouterClient()
  {
    //console.log(this.clientForm.value);
    let formValues = this.clientForm.value;
    let client: Client = { id: 0,
      nom: formValues.nom,
      prenom: formValues.prenom,
      age: formValues.age,
      ca: formValues.ca,
      dateAjout: new Date() }
      this.clientService.addClient(client);
  }
}
