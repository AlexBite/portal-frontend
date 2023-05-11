import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { LayoutComponent } from "./ui/layout/layout/layout.component";

export const appRoutes: Route[] = [{
  path: '',
  pathMatch: 'full',
  component: LayoutComponent,
  children: [
    {
      path: '',
      loadChildren: () => import('./pages/pages.module')
        .then((m) => m.PagesModule,),
    }
  ]
}];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      initialNavigation: 'enabledBlocking',
    })
  ]
})
export class AppRoutingModule {

}
