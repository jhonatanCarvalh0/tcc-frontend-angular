import { Component, OnInit, OnDestroy, ViewEncapsulation, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.css'],
})
export class Page404Component implements OnInit {
  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    const body = document.body;

    setInterval(() => {
      let right = Math.random() * 500;
      const top = Math.random() * screen.height;

      const star = this.renderer.createElement('div');
      this.renderer.addClass(star, 'star');

      const starText = this.renderer.createText('');
      this.renderer.appendChild(star, starText);

      const appPage404Body = document.querySelector('.body');
      this.renderer.appendChild(appPage404Body, star);

      const interval = setInterval(() => {
        if (right >= screen.width) {
          clearInterval(interval);
          this.renderer.removeChild(appPage404Body, star);
        }

        right += 3;
        this.renderer.setStyle(star, 'right', `${right}px`);
      }, 10);

      this.renderer.setStyle(star, 'top', `${top}px`);
    }, 100);
  }
}
