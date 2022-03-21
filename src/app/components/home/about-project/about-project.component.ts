import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-project',
  templateUrl: './about-project.component.html',
  styleUrls: ['./about-project.component.css']
})
export class AboutProjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openMainProject() {
    window.open("https://www.proyectomigala.global/", "_blank");
  }
}
