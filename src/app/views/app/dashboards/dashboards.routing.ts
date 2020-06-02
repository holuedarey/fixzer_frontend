import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardsComponent } from './dashboards.component';
import { DefaultComponent } from './default/default.component';
import { ContentComponent } from './content/content.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { AuthGuardService } from 'src/app/guards/auth-guard.service';

const routes: Routes = [
    {
        path: '', component: DashboardsComponent,
        children: [
            { path: '', redirectTo: 'default', pathMatch: 'full' },
            { path: 'booking', component: ContentComponent,  canActivate: [AuthGuardService] },
            { path: 'default', component: DefaultComponent,  canActivate: [AuthGuardService] },
            { path: 'content', component: ContentComponent, canActivate: [AuthGuardService] },
            { path: 'analytics', component: AnalyticsComponent, canActivate: [AuthGuardService] },
            { path: 'ecommerce', component: EcommerceComponent, canActivate: [AuthGuardService] },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardsRoutingModule { }