import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SignComponent} from "./sign/sign.component";
import {SignupComponent} from "./signup/signup.component";
import {SigninComponent} from "./signin/signin.component";

const authRoutes: Routes = [
  {path: 'login', component: SignComponent, children: [
      {path: 'signup', component: SignupComponent},
      {path: '', component: SigninComponent}
    ]
  }
];

@NgModule({
  imports:[RouterModule.forChild(authRoutes)],
  exports:[RouterModule]

})

export class AuthRoutingModule {

}
