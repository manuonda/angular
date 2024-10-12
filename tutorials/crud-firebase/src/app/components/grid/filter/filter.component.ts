import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

const MATERIAL_MODULES = [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule];

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule,MATERIAL_MODULES],
  templateUrl: './filter.component.html',
  styles: `
  .matFormField{
    font-size: 1rem;
    width: 100%;
    margin-top:1rem
  }
  
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent {
  filter = model('')
  label = input<string>("")
  placeholder = input<string>("")

}
