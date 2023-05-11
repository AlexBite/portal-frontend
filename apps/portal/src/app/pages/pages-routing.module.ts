import { Route, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { QuestionsListComponent } from "./questions-list/questions-list.component";

const routes: Route[] = [{
  path: '',
  component: QuestionsListComponent
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {

}
