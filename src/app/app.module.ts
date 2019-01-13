import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrollDirective } from './scroll.directive';
import { FooterfixDirective} from './footerfix.directive';
import { CityComponent } from './city/city.component';
import { HeaderComponent } from './city/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BodyComponent } from './city/body/body.component';
import { SummaryViewComponent } from './city/body/summary-view/summary-view.component';
import { DetailsViewComponent } from './city/body/details-view/details-view.component';
import { DetailsComponent } from './city/body/details/details.component';
import { TreeviewModule } from 'ngx-treeview';

@NgModule({
  declarations: [
    AppComponent,
    ScrollDirective,
    FooterfixDirective,
    CityComponent,
    HeaderComponent,
    BodyComponent,
    SummaryViewComponent,
    DetailsViewComponent,
    DetailsComponent
  ],
  imports: [
    NgbModule,
    TreeviewModule.forRoot(),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
