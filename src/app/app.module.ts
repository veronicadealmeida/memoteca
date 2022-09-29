import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateThoughtComponent } from './components/thought/create-thought/create-thought.component';
import { UpdateThoughtComponent } from './components/thought/update-thought/update-thought.component';
import { DeleteThoughtComponent } from './components/thought/delete-thought/delete-thought.component';
import { ListThoughtComponent } from './components/thought/list-thought/list-thought.component';
import { ThoughtComponent } from './components/thought/thought/thought.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UpdateThoughtComponent,
    DeleteThoughtComponent,
    ListThoughtComponent,
    ThoughtComponent,
    CreateThoughtComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
