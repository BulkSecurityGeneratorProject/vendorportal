import { NgModule } from '@angular/core';

import { VendorportalSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [VendorportalSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [VendorportalSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class VendorportalSharedCommonModule {}
