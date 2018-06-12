import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CardInfoComponent } from './components/card-info/card-info.component';
import { ListCardComponent } from './components/list-card/list-card.component';
import { FilterStarComponent } from './components/filter-star/filter-star.component';
import { FilterNameComponent } from './components/filter-name/filter-name.component';
import { ListFilterComponent } from './components/list-filter/list-filter.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const Routes = [
  {
    path: '',
    redirectTo: 'finderhotels',
    pathMatch: 'full'
  },
  {
    path: 'finderhotels',
    component: HotelsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CardInfoComponent,
    ListCardComponent,
    FilterStarComponent,
    FilterNameComponent,
    ListFilterComponent,
    HotelsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(Routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
