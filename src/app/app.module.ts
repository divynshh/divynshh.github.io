import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HeroComponent } from './hero/hero.component';
import { HerotitleComponent } from './herotitle/herotitle.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { VideoComponent } from './video/video.component';
import { Herotitle2Component } from './herotitle2/herotitle2.component';
import { SocialTrayComponent } from './social-tray/social-tray.component';
import { AboutComponent } from './about/about.component';
import { SkillScaleComponent } from './skill-scale/skill-scale.component';
import { SkillsetComponent } from './skillset/skillset.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectcardComponent } from './projectcard/projectcard.component';
import { GetInTouchComponent } from './get-in-touch/get-in-touch.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    HerotitleComponent,
    VideoComponent,
    Herotitle2Component,
    SocialTrayComponent,
    AboutComponent,
    SkillScaleComponent,
    SkillsetComponent,
    ExperienceComponent,
    ProjectsComponent,
    FooterComponent,
    ProjectcardComponent,
    GetInTouchComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
