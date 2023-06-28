import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  prevScrollpos = window.pageYOffset;
  @HostListener('window:scroll', ['$event']) onScroll(event : any){
    // console.log('Srolled')
    
    // console.log(this.prevScrollpos);
    var currentScrollPos = window.pageYOffset;
    var navbar = document.getElementsByClassName("navbar")[0];
  if (this.prevScrollpos > currentScrollPos) {
    navbar.setAttribute('style' , 'top : 0')
  } else {
    navbar.setAttribute('style' , 'top : -100px');
  }
  this.prevScrollpos = currentScrollPos;
  // console.log(this.prevScrollpos);
  
  }
}
