import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {FaqSectionComponent} from "./components/faq-section/faq-section.component";
import {TeamSectionComponent} from "./components/team-section/team-section.component";



const routes: Routes = [
  // {
  //   path: '',
  //   component: DashboardLComponent,
  //   children: [
  //     { path: '', component: FeedsCComponent},
  //     { path: 'admin', component: AdminCComponent },
  //     { path: 'notifications', component: NotificationCComponent },
  //     { path: 'profile/:userName', component: ProfileCComponent },
  //   ]
  // },
  // {
  //   path: 'auth',
  //   component: AuthLComponent,
  //   children: [
  //     { path: '', pathMatch: 'full', redirectTo: 'login'},
  //     { path: 'login', component: LoginComponent },
  //     { path: 'signup', component: SignupComponent },
  //     { path: 'forgot', component: ForgotSthLoginCComponent },
  //   ]
  // },
  { path: 'team',
    component: TeamSectionComponent
  },
  { path: 'faq',
    component: FaqSectionComponent
  },
  { path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
