import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { DetalhesUsuarioComponent } from './detalhes-usuario/detalhes-usuario.component';

//FontAwesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';

@NgModule({
	declarations: [
		AppComponent,
		ListaUsuariosComponent,
		DetalhesUsuarioComponent,
		BarraSuperiorComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FontAwesomeModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
