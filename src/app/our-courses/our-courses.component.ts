import { Component } from '@angular/core';
import { Section } from './sections/section';
import { icse } from './icse';
import { cbse } from './cbse';
import { comp } from './comp';

@Component({
  selector: 'app-our-courses',
  templateUrl: './our-courses.component.html',
  styleUrls: ['./our-courses.component.css']
})
export class OurCoursesComponent {
 icse: Section = {
   title: 'ICSE',
   desc: "Unlock your child's excellence in Maths, Physics, Chemistry, and Biology! Our comprehensive study pattern includes regular worksheets, practice sessions, and class tests for academic achievement.",
   classdesc: icse,
   tabs : ['Class 10','Class 9','Class 8','Class 7','Class 6'],
   anchor: 'icse'
 }

 cbse : Section = {
   title: 'CBSE',
   desc: 'Parents seeking Maths and Science excellence for their child, look no further! Our program ensures exam success and skill enhancement through extensive question-solving. Join us for academic excellence!',
   classdesc: cbse,
   tabs: ['Class 10','Class 9','Class 8','Class 7','Class 6'],
   anchor: 'cbse'
 }

 comp : Section = {
   title: 'Competative Exams',
   desc: '  Excel in competitive exams that test skill and temperament. Our comprehensive question bank and mock papers prepare students for NTSE, NSO, IMO, and more. Achieve success with us',
   tabs: ['IMO','NSO','NSSE','NSTSE','NTSE'],
   classdesc: comp,
   anchor: 'competitive-exams'
 }
}
