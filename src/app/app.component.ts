import {
  Component,
  Signal,
  WritableSignal,
  computed,
  effect,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UsersListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly silverButtonSubsCount = 100000;

  subs: WritableSignal<number> = signal(0);
  subsToSilverButtonPercentage: Signal<number> = computed(
    () => (this.subs() / this.silverButtonSubsCount) * 100
  );

  constructor() {
    effect(() => {
      console.log(
        `Your sub count has changed! Now you have ${this.subs()} subs!`
      );
    });
  }

  addSub(): void {
    // Both examples will work
    this.subs.set(this.subs() + 1);
    // this.subs.update((value) => value + 1);

    // This will not work because the computed signal is not writable
    // this.subsToSilverButtonPercentage.set(this.subsToSilverButtonPercentage() + 1);
  }

  subtractSub(): void {
    if (this.subs() > 0) {
      this.subs.set(this.subs() - 1);
    }
  }
}
