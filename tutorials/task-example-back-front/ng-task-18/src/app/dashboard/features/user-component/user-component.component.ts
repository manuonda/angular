import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { User } from '../../../auth/data-access/auth.service';

@Component({
  selector: 'app-user-component',
  standalone: true,
  imports: [],
  templateUrl: './user-component.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})  
export class UserComponentComponent {

  email = input<string>('');
  firstname= input<string>("");
  lastname = input<string>("");
  user = input<User>();

  
}
