import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { HeaderComponent } from './app-components/header/header.component';
import { FooterComponent } from './app-components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styles: [],
  providers: []
})
export class AppComponent { }
