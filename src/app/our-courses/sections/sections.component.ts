import { Component, Input,OnInit} from '@angular/core';
import { Class, Section } from './section';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit{
 @Input() section!: Section;
 currentClass! : Class;
 height:number = 15;
 isMobile = window.innerWidth <=500;
 isNumber(val : any):boolean{
  return (typeof(val) == 'number')
 }

  changeTab(i:number){
    this.currentClass = this.section!.classdesc[i]!
  }
  ngOnInit(){
  // console.log(typeof(this.section));
  this.currentClass = this.section!.classdesc[0]!
  this.height = this.section.tabs.length * 2 + (this.section.tabs.length - 1)*0.6;

  // console.log(this.height);
 }
}
