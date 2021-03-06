import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { CoreModule } from '../core/core.module';
import { ConfigModule } from './config/config.module';
import { AppDeviceManagementModule } from './app-device-management/app-device-management.module';
import { AppFixtureManagementModule } from './app-fixture-management/app-fixture-management.module';
import { AppTestFixtureProviderModule } from './app-test-fixture-provider/app-test-fixture-provider.module';
import { AppFixtureOperationModule } from './app-fixture-operation/app-fixture-operation.module';
import { ErrorHandlingModule } from './error-handling/error-handling.module';
import { AppLightSwitchManagementModule } from './app-light-switch-management/app-light-switch-management.module';
import { AppSystemStatusModule } from './app-system-status/app-system-status.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreModule,
    DashboardModule,
    ErrorHandlingModule,
    AppDeviceManagementModule,
    AppFixtureManagementModule,
    AppTestFixtureProviderModule,
    AppFixtureOperationModule,
    AppLightSwitchManagementModule,
    AppSystemStatusModule,
    ConfigModule,
  ],
})
export class FeaturesModule {
}
