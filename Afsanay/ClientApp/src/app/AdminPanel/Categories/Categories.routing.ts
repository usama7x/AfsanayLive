import { Routes } from '@angular/router';
import { CategoriesComponent } from './Categories/categories.component';
import { AddCategoryComponent } from './AddCategory/add-category.component';
export const CategoriesRoutes: Routes = [
    {
        path: '',
        component: CategoriesComponent,
        pathMatch: 'full'
    },
    {
        path: 'add',
        component: AddCategoryComponent
    }
];