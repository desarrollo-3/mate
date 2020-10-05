import { Component, OnInit } from '@angular/core';
import { faBalanceScale, faHandshake, faCheck } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.sass']
})
export class AboutUsComponent implements OnInit {

  private aboutUsText = '.about-us-text';
  private aboutUsImg = '.about-us-img';
  private values = '.values';

  faBalanceScale = faBalanceScale;
  faHandshake = faHandshake;
  faCheck = faCheck;

  constructor() { }

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(this.aboutUsText, {
        scrollTrigger: {
            start: '380px top',
            end: '+=100 top',
            scrub: true,
            markers: false
        },
        marginRight: 0,
        opacity: 1,
        ease: 'none'
    });
    gsap.to(this.aboutUsImg, {
      scrollTrigger: {
          start: '380px top',
          end: '+=100 top',
          scrub: true,
          markers: false
      },
      marginLeft: 0,
      opacity: 1,
      ease: 'none'
    });
  }

}
