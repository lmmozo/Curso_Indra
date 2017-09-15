import { ComunesModule } from './comunes/comunes.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { IdeasComponent } from './ideas/ideas.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { ProvinciaComponent } from './provincia/provincia.component';
import { CompraComponent } from './compra/compra.component';
import { ListacompraComponent } from './listacompra/listacompra.component';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    IdeasComponent,
    NoticiaComponent,
    ProvinciaComponent,
    CompraComponent,
    ListacompraComponent,
  ],
  imports: [
    BrowserModule,
    ComunesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
