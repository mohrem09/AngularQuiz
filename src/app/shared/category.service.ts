import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  quizContent: any[] = [];
  playerAnswers: { categoryId: number; answer: string }[] = [];
  score = 0;
  isQuizFinished = false;
  playerName: string = '';

  constructor(private http: HttpClient) {}

  getQuizCategory() {
    this.http
      .get('http://localhost:3000/category')
      .subscribe((category: any) => {
        for (const cat of category) {
          this.http
            .get(`http://localhost:3000/category?categoryId=${cat.id}`)
            .subscribe((answers: any) => {
              this.quizContent.push({
                id: cat.id,
                cat: cat.categoryLabel,
              });
            });
        }
      });
  }

  addAnswer(answer: string, categoryId: number) {
    const isAnswered = this.playerAnswers.find(
      (a) => a.categoryId === categoryId
    );
    return categoryId;
  }

  resetQuiz() {
    this.quizContent = [];
    this.playerAnswers = [];
    this.score = 0;
    this.isQuizFinished = false;
  }
}
