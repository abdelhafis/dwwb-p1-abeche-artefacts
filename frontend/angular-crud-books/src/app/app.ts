import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
  <h1>Bonjour le monde</h1>
  <router-outlet />
  `,
  styles: ``
})
export class App {
  protected readonly title = signal('angular-crud-books');
}
