import { Component, OnInit, Input } from '@angular/core';
import { Lesson } from './../lesson';
import { LessonService } from './../lesson.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {
  @Input() lesson: Lesson;
  public isEdit: boolean = false;
  public newLesson: Lesson = { id: 0, topic: '', lecturer: '', date: '' };
  public isAdding: boolean = false;

  constructor(private lessonService: LessonService) { }

  ngOnInit() {}
  public toggleAdding() {
    return this.isAdding = !this.isAdding;
  }
  get lessons() {
    return this.lessonService.getLessons();
  }
  public editLesson(): void {
    this.newLesson = {...this.lesson};
    this.isEdit = true;
  }
  public saveLesson(lesson, newLesson): void {
    this.lessonService.editLesson(lesson, newLesson);
    this.isEdit = false;
  }
  public deleteLesson(lesson): void {
    this.lessonService.removeLesson(lesson);
  }
  public cancelEdit(): void {
    this.isEdit = false;
  }
}
