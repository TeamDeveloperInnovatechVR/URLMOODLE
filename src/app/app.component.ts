import { isPlatformBrowser } from '@angular/common';
import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  platformId = inject(PLATFORM_ID);
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      window.location.href = 'http://98.84.58.154/moodle';
    }
  }
}
