import { Component, OnInit, Input } from '@angular/core';
import { Lesson } from './../lesson';
import { LessonService } from './../lesson.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  private newLesson: Lesson = {
    id: null,
    topic: '',
    date: '',
    lecturer: ''
  };

  constructor(private lessonService: LessonService) { }
  @Input() isAdding;
  ngOnInit() {
  }
  public addNewLesson(): void {
    this.lessonService.addToLessons(this.newLesson);
    this.newLesson = {
      id: null,
      topic: '',
      date: '',
      lecturer: ''
    };
    this.isAdding = !this.isAdding;
  }
  public close(): void {
    this.isAdding = !this.isAdding;
  }
}
