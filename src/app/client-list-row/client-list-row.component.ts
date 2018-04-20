import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Client } from '../shared/client';

@Component({
  selector: '[app-client-list-row]',
  templateUrl: './client-list-row.component.html',
  styleUrls: ['./client-list-row.component.css']
})

export class ClientListRowComponent implements OnInit {

  @Input() mClient: Client;
  @Output() clientSelected = new EventEmitter<Client>();
  @Output() clientDeleted = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  view(){
      this.clientSelected.emit(this.mClient);
  }

  delete(){
    this.clientDeleted.emit(this.mClient.id);
  }
}
