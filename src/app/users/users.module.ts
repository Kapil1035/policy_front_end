import { NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { LayoutComponent } from './layout.component';
import { ListComponent } from './list.component';
import { AddEditComponent } from './add-edit.component';
import { QuotesComponent } from './quotes/quotes.component';
import { CasesComponent } from './cases/cases.component';
import { InfoComponent } from './info/info.component';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        UsersRoutingModule,
        FormsModule
    ],
    declarations: [
        LayoutComponent,
        ListComponent,
        AddEditComponent,
        QuotesComponent,
        CasesComponent,
        InfoComponent
    ]
})
export class UsersModule { }
