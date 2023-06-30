import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-chat-button',
  templateUrl: './chat-button.component.html',
  styleUrls: ['./chat-button.component.css']
})
export class ChatButtonComponent {
  prevScrollpos = window.scrollY;
  @HostListener('window:scroll', ['$event']) onScroll(event : any){
    // console.log('Srolled')
    
    // console.log(this.prevScrollpos);
    var currentScrollPos = window.scrollY;
    var navbar = document.getElementsByClassName("chat-button")[0];
  if (this.prevScrollpos > currentScrollPos) {
    navbar.setAttribute('style' , 'bottom : 5%')
  } else {
    navbar.setAttribute('style' , 'bottom : -100px');
  }
  this.prevScrollpos = currentScrollPos;
  // console.log(this.prevScrollpos);
  
  }
}
