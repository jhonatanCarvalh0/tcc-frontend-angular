import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    $(".logo, .logo-expand, .discover").on("click", function (e) {
      $(".main-container").removeClass("show");
      $(".main-container").scrollTop(0);
    });

    $(".trending, .video").on("click", function (e) {
      $(".main-container").addClass("show");
      $(".main-container").scrollTop(0);
      $(".sidebar-link").removeClass("is-active");
      $(".trending").addClass("is-active");
    });
  }

}