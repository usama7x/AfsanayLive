import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './Categories/categories.component';
import { RouterModule } from '@angular/router';
import { CategoriesRoutes} from './Categories.routing';
import { AddCategoryComponent } from './AddCategory/add-category.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { TranslateModule } from '@ngx-translate/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatGridListModule } from '@angular/material/grid-list';
import { GlobalModule } from 'src/app/Global/Global.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CategoriesComponent, AddCategoryComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatIconModule,	      
  MatCheckboxModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatMenuModule,
    MatOptionModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatDividerModule,
    MatListModule, 
    RouterModule.forChild(CategoriesRoutes),
    TranslateModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    GlobalModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CategoriesModule { }
