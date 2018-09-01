import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-component',
  templateUrl: './courses-component.component.html',
  styleUrls: ['./courses-component.component.css']
})
export class CoursesComponentComponent implements OnInit {
  course ={
    title: "The Complete Angular Course",
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2018, 3, 1),
    title2: "Supaul, which was previously a part of Saharsa district, is part of the Mithila region.[1] Mithila first gained prominence after being settled by Indo-Aryan peoples who established the Mithila Kingdom (also called Kingdom of the Videhas).[2] During the late Vedic period (c. 1100–500 BCE), Videha became one of the major political and cultural centers of South Asia, along with Kuru and Pañcāla. The kings of the Videha Kingdom were called Janakas.[3] The Videha Kingdom was later incorporated into the Vajji confederacy, which had its capital in the city of Vaishali."
  }
  constructor() { }

  ngOnInit() {
  }

}
