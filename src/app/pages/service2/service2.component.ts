// @ts-ignore

import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-service2',
  templateUrl: './service2.component.html',
  styleUrls: ['./service2.component.sass']
})
export class Service2Component implements OnInit {

  private headerContentTop = '.service-header > .content-top';
  private headerContentBottom = '.service-header > .content-bottom';

  title = 'Asesoría Fiscal';
  excerpt = 'Evaluamos las estrategias y analizamos la situación económica, aplicando las normatividades y regulaciones vigentes.';
  services = [
    'Asesoramiento y estudio de nuevos negocios',
    'Asesoramiento de reestructuraciones',
    'Seguimiento a actos dictados por la Administración',
    'Representación ante tribunales',
    'Valoración del estado financiero de empresas',
    'Asesoramiento de sociedades internacionales'
  ];

  constructor() { }

  ngOnInit(): void {
    /* for(let i = 3; i <= totalFrames; i++) {
        images[i] =  new Image();
        images[i].src = "../../assets/secuencia1/service1" + pad(i, 3)+".jpg";
    } */
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(this.headerContentTop, {
        scrollTrigger: {
            start: 'top top',
            end: '+=300 top',
            scrub: true,
            markers: false
        },
        y: -100,
        opacity: 0,
        ease: 'none'
    });
    gsap.to(this.headerContentBottom, {
        scrollTrigger: {
            start: '4000px top',
            end: '+=300 top',
            scrub: true,
            markers: false
        },
        y: -100,
        opacity: 1,
        ease: 'none'
    });
  }

  public ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    ScrollTrigger.getAll().forEach(ST => ST.disable());
    console.log('Componente destruido');
  }

}
