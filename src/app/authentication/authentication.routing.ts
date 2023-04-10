import {Routes , RouterModule} from '@angular/router';
import { AuthURL } from './authentication.url';
import { DashboardComponent } from './components/dashboard/dashboard.component';
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

const RouteList: Routes = [
    {path : '' , redirectTo: AuthURL.Dashboard , pathMatch: 'full'},
    {path : AuthURL.Dashboard, component: DashboardComponent},
    {path : AuthURL.Setting, component: SettingComponent},
    {path : AuthURL.Profile, component: ProfileComponent},
    {path : AuthURL.Members, component: MembersComponent},
    {path : AuthURL.MembersCreate, component: MembersCreateComponent},
    {path: AuthURL.Companies, component: CompaniesComponent},
    {path: AuthURL.CompaniesCreate, component:CompaniesCreateComponent},
    {path: AuthURL.News, component:NewsComponent},
    {path: AuthURL.Cvs, component:CvComponent},
    {path: AuthURL.Services, component:ServicesComponent},
    {path: AuthURL.ServicesCreate, component:ServicesCreateComponent}

];

export const AuthenticationRouting = RouterModule.forChild(RouteList);

