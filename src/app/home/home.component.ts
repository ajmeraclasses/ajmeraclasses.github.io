import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Result } from '../result-card/result';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  results: Result[] = [];
   w = window.innerWidth;
  Highlights = [
    {
      'highlight' : "Individual Attention",
      'desc' : "Experience personalized growth with Ajmera Classes' individual attention. Our dedicated instructors tailor learning to your unique needs, ensuring maximum understanding and success. Stand out and thrive!"
    },
    {
      'highlight' : "Limited number of students",
      'desc' : "Unlock the benefits of a limited number of students per batch at Ajmera Classes. Receive personalized attention, interactive learning, and an optimal environment. Join us for academic excellence"
    },
    {
      'highlight' : "Regular Assignments",
      'desc' : "At Ajmera Classes, regular assignments are key to sharpening your skills. Stay one step ahead, reinforce concepts, and excel in your academic journey with our dedicated approach."
    },
    {
      'highlight' : 'Regular Class Test',
      'desc' : "For better results, we conduct regular class tests at Ajmera Classes. Stay prepared, track your progress, and achieve outstanding academic performance. Join us and elevate your success!"
    }
  ];

  constructor(private http : HttpClient){
      this.getResults();
  }

  getResults(){
    this.http.get('assets/result.csv',{responseType : 'text'}).subscribe(data => {
      var results = data.split('\n');
      for(var i=1;i<=10;i++){
        var result = results[i].split(',');
        this.results.push({
          name: result[1],
          percentage: result[2],
          image: result[0],
        } as Result)
      }
    })
  }
}
