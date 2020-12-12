import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories = []
  private categoryService: CategoryService

  constructor(categoerSevice :CategoryService) {
    this.categoryService = categoerSevice
   }

  ngOnInit(): void {
    this.loadCategories()
  }
  loadCategories()
  {
    const observable = this.categoryService.getCategories()
    observable.subscribe(response =>
      {
        if(response['status'] == 'success')
        {
          this.categories = response['data']
        }
      })
  }
  onDelete(category)
  {
    const observable = this.categoryService.deleteCategory(category.id)
    observable.subscribe(response => {
      if (response['status'] == 'success') {
        alert('deleted the category successfully')
        this.loadCategories()
      }
    })
  }

}
