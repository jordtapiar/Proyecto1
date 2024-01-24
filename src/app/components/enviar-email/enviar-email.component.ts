import { Component, inject} from '@angular/core';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-enviar-email',
  templateUrl: './enviar-email.component.html',
  styleUrls: ['./enviar-email.component.scss'],
})
export class EnviarEmailComponent   {
  private auth: Auth = inject(Auth);

  constructor() { }

  

}
