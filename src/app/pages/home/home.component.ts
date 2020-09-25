import { Component, OnInit } from '@angular/core';
import { Service1Component } from '../service1/service1.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  title = 'Servicios de asesoramiento';

  constructor() { }

  ngOnInit(): void {
  }

}
