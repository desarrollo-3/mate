import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-service5',
  templateUrl: './service5.component.html',
  styleUrls: ['./service5.component.sass']
})
export class Service5Component implements OnInit {

  private headerContentTop = '.service-header > .content-top';
  private headerContentBottom = '.service-header > .content-bottom';

  title = 'Asesoría en Proyectos de inversión';
  excerpt = 'Diseñamos e Implementamos modelos de negocio, mediante estrategias y proyecciones de rentabilidad, planificando un plan y estructura organizacional.';
  services = [
    'Revisión de Presupuestos',
    'Desarrollo de modelo financiero',
    'Evaluación Financiera',
    'Mejoras y Optimización'
  ];

  constructor() { }

  ngOnInit(): void {
    /* for(let i = 3; i <= totalFrames; i++) {
        images[i] =  new Image();
        images[i].src = "../../assets/secuencia3/service3" + pad(i, 3)+".jpg";
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
