import { ProductComponent } from './views/product/product.component';
import { SiteComponent } from './views/site/site.component';
import { PainelComponent } from './views/painel/painel.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PainelComponent
  },
  {
    path: 'site',
    component: SiteComponent
  },
  {
    path: 'produto',
    component: ProductComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
