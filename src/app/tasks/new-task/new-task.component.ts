import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDueDate: string = '';

  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();
  onClose(): void {
    this.cancel.emit();
  }
}
