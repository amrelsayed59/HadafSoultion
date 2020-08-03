import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostShowComponent } from './post-show/post-show.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [PostShowComponent, PostListComponent, PostEditComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    
    }),
  ]
})
export class PostsModule { }

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

