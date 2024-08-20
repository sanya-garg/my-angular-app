import { Routes } from '@angular/router';
import { EncapsulationComponent } from './Encapsulation/encapsulation/encapsulation.component';
import { EncapsulationNoneComponent } from './Encapsulation/encapsulation-none/encapsulation-none.component';
import { EncapsulationShadowDOMComponent } from './Encapsulation/encapsulation-shadow-dom/encapsulation-shadow-dom.component';
import { InputParentComponent } from './InputDecoraters/input-parent/input-parent.component';
import { InputChildComponent } from './InputDecoraters/input-child/input-child.component';
import { OutputParentComponent } from './OutputDecoraters/output-parent/output-parent.component';
import { OutputChildComponent } from './OutputDecoraters/output-child/output-child.component';
import { TwoWayNBindingComponent } from './TwoWayBinding/two-way-nbinding/two-way-nbinding.component';
import { PipesComponent } from './Pipes/pipes/pipes.component';
import { AttributeComponent } from './Directives/AttributeDirective/attribute/attribute.component';
import { ReactiveFormComponent } from './Forms/ReactiveForms/reactive-form/reactive-form.component';
import { TemplateFormComponent } from './Forms/TemplateDrivenForms/template-form/template-form.component';
import { UserComponent } from './HTTPClient/user/user.component';
import { UserDetailsComponent } from './HTTPClient/user-details/user-details.component';
import { AddUserComponent } from './HTTPClient/add-user/add-user.component';

export const routes: Routes = [
    { path: 'encapsulation', component: EncapsulationComponent },
    { path: 'encapsulation-none', component: EncapsulationNoneComponent },
    { path: 'encapsulation-shadowDOM', component: EncapsulationShadowDOMComponent },
    { path: 'input-parent', component: InputParentComponent },
    { path: 'input-child', component: InputChildComponent },
    { path: 'output-parent', component: OutputParentComponent },
    { path: 'output-child', component: OutputChildComponent },
    { path: 'two-way-binding', component: TwoWayNBindingComponent },
    { path: 'pipe', component: PipesComponent },
    { path: 'attribute', component: AttributeComponent },
    { path: 'reactive-form', component: ReactiveFormComponent },
    { path: 'template-form', component: TemplateFormComponent },
    {
        path: 'user',
        //component : UserComponent, 
        loadComponent: () => import('./HTTPClient/user/user.component').then(m => m.UserComponent)
    },// Lazy loading(we used loadComponent instead of loadChildren as UserComponent is standlone component)
    { path: 'view-details/:id', component: UserDetailsComponent },
    {path : 'add-user', component : AddUserComponent}
];
