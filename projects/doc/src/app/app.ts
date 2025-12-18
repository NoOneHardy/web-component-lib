import { Component, signal } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import {AngularComponents} from '../../../modovo/angular-components/src/public-api'

@Component({
  selector: 'doc-root',
  imports: [RouterOutlet, AngularComponents],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('doc')
}
