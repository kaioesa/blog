import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryNavbarComponent } from './category-navbar/category-navbar.component';
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentFormComponent } from './comment-form/comment-form.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CategoryNavbarComponent,
    SubscriptionFormComponent,
    CommentListComponent,
    CommentFormComponent,
  ],
  imports: [CommonModule],
})
export class ComponentsModule {}
