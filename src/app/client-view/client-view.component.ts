import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Client } from '../shared/client';

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.css']
})
export class ClientViewComponent implements OnInit {

  @Input() mClient: Client;

  constructor() { }

  ngOnInit() {
  }

}