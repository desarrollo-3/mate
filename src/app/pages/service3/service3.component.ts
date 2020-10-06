import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

declare var pad: any;
declare var images: any;
declare var totalFrames: any;

@Component({
  selector: 'app-service3',
  templateUrl: './service3.component.html',
  styleUrls: ['./service3.component.sass']
})
export class Service3Component implements OnInit {

  private headerContentTop = '.service-header > .content-top';
  private headerContentBottom = '.service-header > .content-bottom';

  title = 'Asesoría Laboral';
  excerpt = 'Gestionamos e implementamos estrategias para la organización de forma objetiva relacionada al capital humano.';
  services = [
    'Asesoramiento en materia laboral (contratación, despidos, bajas, salarios, convenio colectivo aplicable etc.)',
    'Gestión de seguros sociales',
    'Elaboración de nóminas',
    'Dirección letrada de procedimientos judiciales con los empleados o exempleados',
    'Gestión de la formación de los empleados',
    'Asesoramiento en materia de prevención de riesgos laborales'
  ];

  constructor() { }

  ngOnInit(): void {
    totalFrames = 152;
    for(let i = 3; i <= totalFrames; i++) {
      images[i] =  new Image();
      images[i].src = "../../assets/secuencia2/service02" + pad(i, 3)+".jpg";
    }
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
