import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { UserComponent } from './user.component';

export const routes: Routes = [
    {
        path: 'login',
        component: UserComponent
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UserRoutingModule { }
