import { Injectable } from '@angular/core';
import { Lesson } from './lesson';

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  constructor() {}

  lessons: Lesson[] = [];

  public getLessons() {
    return this.lessons;
  }

  public addToLessons(lesson: Lesson): void {
    lesson.id = this.lessons.length + 1;
    this.lessons.push(lesson);
  }
  public removeLesson(lesson: Lesson): void {
    const id: number = this.lessons.indexOf(lesson);
    this.lessons.splice(id, 1);
  }
  public editLesson(oldLesson: Lesson, newLesson: Lesson): void {
    const id: number = this.lessons.indexOf(oldLesson);
    this.lessons[id] = newLesson;
  }

}
