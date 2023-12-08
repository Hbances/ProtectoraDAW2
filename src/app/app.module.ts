import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CatsComponent } from './cats/cats.component';
import { DogsComponent } from './dogs/dogs.component';
import { PetComponent } from './pet/pet.component';

const routes: Routes= [
  { path: 'home', component: HomeComponent },
  { path: 'cats', component: CatsComponent },
  { path: 'dogs', component: DogsComponent },
  { path: 'pet/:id', component: PetComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CatsComponent,
    DogsComponent,
    PetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
