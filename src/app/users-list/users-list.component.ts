import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  WritableSignal,
  signal,
} from '@angular/core';
import { User, UserService } from '../user.service';
import { CommentsComponent } from '../comments/comments.component';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule, CommentsComponent],
  templateUrl: './users-list.component.html'
})
export class UsersListComponent {
  users: WritableSignal<User[]> = signal([]);

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users.set(users);
    });
  }
}
