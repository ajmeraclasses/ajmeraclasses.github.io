import { Component } from '@angular/core';
import { Testimonial } from './testimoinal';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-testomonials',
  templateUrl: './testomonials.component.html',
  styleUrls: ['./testomonials.component.css']
})
export class TestomonialsComponent {
  isMobile = window.innerWidth < 500 ;
  carousel_items :Testimonial[][] = [];
  mobile_carousel_items : Testimonial[] = [];
  constructor(private http : HttpClient){
    this.getTestimonials();
    console.log(this.isMobile)
  }

  getTestimonials(){
    // console.log('Get')
    this.http.get('assets/testimonials.csv',{responseType : 'text'}).subscribe(data => {
      var testimonials = data.split('\n');
      var n = Math.ceil((testimonials.length -1)/3)
      // console.log(n)
      for(var i=0;i<n;i++){
        var carousel_item:Testimonial[] = []
        for(var j=0;j<3;j++){
          var testimonial = testimonials[3*i + j +1].split('/')
          // console.log(testimonial);
          carousel_item.push({
            name: testimonial[0],
            testimonial: testimonial[1],
            photo: testimonial[2]
          })
        }
        this.carousel_items.push(carousel_item);
      }
      for(var i = 1;i<testimonials.length;i++){
        // var carousel_item:Testimonial[] = []
        var testimonial = testimonials[i].split('/')
        this.mobile_carousel_items.push({
          name: testimonial[0],
          testimonial: testimonial[1],
          photo: testimonial[2]
        })
      }
      console.log(this.mobile_carousel_items);
    })
  }
}
