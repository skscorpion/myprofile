import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppService } from '../service/app.service';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { PdfDownloaderComponent } from './pdf-downloader/pdf-downloader.component';


const appRoutes: Routes = [
   { path: '', redirectTo: 'home', pathMatch:'full' }, 
    { path: 'home', component: HomeComponent }, 
    { path: 'about', component: AboutComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'contact', component: ContactComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent,
    ProjectsComponent,
    NavigationComponent,
    FooterComponent,
    PdfDownloaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
      RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only 
        ) 
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
