import { Component } from '@angular/core';
import { Testimonial } from './testimoinal';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-testomonials',
  templateUrl: './testomonials.component.html',
  styleUrls: ['./testomonials.component.css']
})
export class TestomonialsComponent {
  carousel_items :Testimonial[][] = [];
  constructor(private http : HttpClient){
    this.getTestimonials();
  }

  getTestimonials(){
    console.log('Get')
    this.http.get('assets/testimonials.csv',{responseType : 'text'}).subscribe(data => {
      var testimonials = data.split('\n');
      // console.log(testimonials);
      var n = Math.ceil((testimonials.length -1)/3)
      console.log(n)
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
      console.log(this.carousel_items);
    })
  }
}
