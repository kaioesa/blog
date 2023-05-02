import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SingleCategoryComponent } from './single-category/single-category.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    SingleCategoryComponent,
    SinglePostComponent,
    TermsConditionComponent,
    ContactComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
