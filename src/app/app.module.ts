import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BookAddComponent } from "./addBook/book-add.component";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [BookAddComponent],
    imports: [BrowserModule, HttpClientModule, ReactiveFormsModule],
    providers: []
})
export class AppModule {}