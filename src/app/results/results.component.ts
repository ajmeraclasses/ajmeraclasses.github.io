import { Component } from '@angular/core';
import { Result } from '../result-card/result';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
  results: Result[] = [];
  constructor(private http : HttpClient){
    this.getResults();
}

getResults(){
  this.http.get('assets/result.csv',{responseType : 'text'}).subscribe(data => {
    var results = data.split('\n');
    for(var i=1;i<=results.length;i++){
      var result = results[i].split(',');
      this.results.push({
        name: result[1] ,
        percentage: result[2],
        image: result[0] ?? 'person.jpg',
      } as Result)
    }
  })
}
}
