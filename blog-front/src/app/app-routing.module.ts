import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/pages/home/home.component';
import { SingleCategoryComponent } from './modules/pages/single-category/single-category.component';
import { SinglePostComponent } from './modules/pages/single-post/single-post.component';
import { AboutComponent } from './modules/pages/about/about.component';
import { TermsConditionComponent } from './modules/pages/terms-condition/terms-condition.component';
import { ContactComponent } from './modules/pages/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'category',
    component: SingleCategoryComponent,
  },
  {
    path: 'post',
    component: SinglePostComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'terms-condition',
    component: TermsConditionComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
