//base
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

//Routing
import { AppRoutingModule } from './routes/app-routing.module';

//root component
import { AppComponent } from './app.component';

// Layout, Pages and Components Module
import { SharedLayoutModule } from './layouts/sharedLayout.module';
import { SharedPageModule } from './pages/shared.module';
import { SharedComponentsModule } from './components/sharedComponents.module';

//angular-material module requirement to enable animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//angular-material-component
import { AngularMaterialModule } from './components/angular-material/material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    SharedComponentsModule,
    SharedLayoutModule,
    SharedPageModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
