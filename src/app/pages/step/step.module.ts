// NG2
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
// App
import { StepPage } from './step.page';
import { StepListComponent } from "./components/step-list/step-list.component";
import { StepFormComponent } from './components/step-form/step-form.component';
import { StepService } from "./services/step-service/step.service";

const STEP_ROUTES:Routes = [
  {
    path: 'step',
    component: StepPage,
    children: [
      { path: '', component: StepListComponent },
      { path: 'form/?:id', component: StepFormComponent }
    ]
  }
];

@NgModule({
  declarations: [
    StepListComponent,
    StepFormComponent,
    StepPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(STEP_ROUTES)
  ],
  providers: [
    StepService
  ],
  bootstrap: [StepPage]
})
export class StepModule {
}
