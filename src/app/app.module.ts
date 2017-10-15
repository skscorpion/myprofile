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
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { ModalPopupComponent } from './modal-popup/modal-popup.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

const appRoutes: Routes = [
  
   { path: '', redirectTo: 'home', pathMatch:'full' }, 
    { path: 'home', component: HomeComponent }, 
    { path: 'about', component: AboutComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
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
    PdfDownloaderComponent,
    ModalPopupComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BootstrapModalModule.forRoot({container:document.body}),
      RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only 
        ) 
  ],
  providers: [AppService],
  entryComponents: [
        ModalPopupComponent
      ],
  bootstrap: [AppComponent]
})
export class AppModule { }
