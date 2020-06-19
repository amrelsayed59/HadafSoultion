import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NoteShowComponent } from './note-show/note-show.component';
import { NoteListComponent } from './note-list/note-list.component';


@NgModule({
  declarations: [NoteShowComponent, NoteListComponent],
  imports: [
    CommonModule,
    NotesRoutingModule
  ]
})
export class NotesModule { }
