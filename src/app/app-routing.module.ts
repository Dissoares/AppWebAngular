import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ContentComponent } from './layout/content/content.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'Header', component: HeaderComponent },
  { path: 'SidebAr', component: SidebarComponent },
  { path: 'Footer', component: FooterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
