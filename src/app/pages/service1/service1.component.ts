// @ts-ignore

import { Component, OnInit, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-service1',
  templateUrl: './service1.component.html',
  styleUrls: ['./service1.component.sass']
})
export class Service1Component implements OnInit, OnDestroy {

  private headerContentTop = '.service-header > .content-top';
  private headerContentBottom = '.service-header > .content-bottom';

  title = 'Asesoría en planeación y análisis financiero';
  excerpt = 'Analizamos y planeamos el comportamiento de la organización (presente y futuro), con metas cuantificables reduciendo su riesgo financiero.';
  services = [
    'Modelo de Negocio',
    'Factibilidad Financiera',
    'Optimización de flujo de efectivo',
    'Valuación de Empresas',
    'Plan de negocios',
    'Planeación Estratégica',
    'Análisis de mercado'
  ];

  constructor() { }

  ngOnInit(): void {
    /* for(let i = 3; i <= totalFrames; i++) {
        images[i] =  new Image();
        images[i].src = "../../assets/secuencia4/service4" + pad(i, 3)+".jpg";
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
