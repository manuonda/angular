import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ApiService } from '@app/api/api.service';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListComponent {
  private readonly _postService  = inject(ApiService);
  

}
