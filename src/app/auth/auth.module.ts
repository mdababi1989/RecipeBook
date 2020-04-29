import {NgModule} from "@angular/core";
import {SignupComponent} from "./signup/signup.component";
import {SigninComponent} from "./signin/signin.component";
import {SignComponent} from "./sign/sign.component";
import {CommonModule} from "@angular/common";
import {AuthRoutingModule} from "./auth-routing.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent,
    SignComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule
  ]
})

export class AuthModule {



}
