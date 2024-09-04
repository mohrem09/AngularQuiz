import { Component, Input } from '@angular/core';
import { CategoryService } from '../shared/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  applyFilter() {
    throw new Error('Method not implemented.');
  }
  filteredContent: any;
  onFilterChange($event: Event) {
    throw new Error('Method not implemented.');
  }

  onCategoryClick() {
    this.filteredContent = this.quizContent.filter(
      (content) => content.id === this.categoryId
    );
  }

  @Input() answers: any[] = [];
  @Input() categoryId: number = 0;
  quizContent: any[] = this.quizService.quizContent;
  category: any;

  constructor(private quizService: CategoryService) {}

  addAnswer(answer: string, categoryId: number) {
    this.quizService.addAnswer(answer, categoryId);
  }

  ngOnInit(): void {
    this.quizService.getQuizCategory();
  }
}
