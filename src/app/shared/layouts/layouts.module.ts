import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {FooterComponent} from '../layouts/footer/footer.component';
import {HeaderComponent} from '../layouts/header/header.component';


@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [
        FooterComponent,
        HeaderComponent,
    ],
    exports: [
        FooterComponent,
        HeaderComponent,
    ],
})
export class LayoutsModule {
}
