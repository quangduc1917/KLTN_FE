import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthenticationRouting } from './authentication.routing';
import { SharedsModule } from '../shareds/shareds.module';
import { SettingComponent } from './components/setting/setting.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MembersComponent } from './components/members/members.component';
import { MembersCreateComponent } from './components/members-create/members-create.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { CompaniesCreateComponent } from './components/companies-create/companies-create.component';
import { NewsComponent } from './components/news/news.component';
import { CvComponent } from './components/cv/cv.component';
import { ServicesComponent } from './components/services/services.component';
import { ServicesCreateComponent } from './components/services-create/services-create.component';


@NgModule({
  declarations: [DashboardComponent, SettingComponent,ProfileComponent,
    MembersComponent,MembersCreateComponent, 
    CompaniesComponent,CompaniesCreateComponent,
    NewsComponent,
    CvComponent,
    ServicesComponent, ServicesCreateComponent],
  imports: [
    CommonModule,
    AuthenticationRouting,
    SharedsModule,
  ]
})
export class AuthenticationModule { }
