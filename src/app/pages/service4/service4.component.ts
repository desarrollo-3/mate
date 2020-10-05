import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-service4',
  templateUrl: './service4.component.html',
  styleUrls: ['./service4.component.sass']
})
export class Service4Component implements OnInit {

  private headerContentTop = '.service-header > .content-top';
  private headerContentBottom = '.service-header > .content-bottom';

  title = 'Asesoría Administrativa';
  excerpt = 'Innovamos los procesos de las organizaciones y sus recursos, mejorando su funcionamiento de forma óptima y responsable.';
  services = [
    'Administrar los recursos',
    'Planificación',
    'Manejo de los recursos económicos ',
    'Trámites administrativos '
  ];

  constructor() { }

  ngOnInit(): void {
    /* for(let i = 3; i <= totalFrames; i++) {
        images[i] =  new Image();
        images[i].src = "../../assets/secuencia5/service5" + pad(i, 3)+".jpg";
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
