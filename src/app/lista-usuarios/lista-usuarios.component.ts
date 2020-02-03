import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { UsuariosService } from '../usuarios.service';
import { UsuarioModel } from '../usuario-model';

@Component({
	selector: 'app-lista-usuarios',
	templateUrl: './lista-usuarios.component.html',
	styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
	listaUsuarios: UsuarioModel[];

	constructor(private usuariosService: UsuariosService, private sanitizer: DomSanitizer) { 
		usuariosService.getUsuarios().subscribe(listagem => {
			this.listaUsuarios = listagem;
		});
	}

	ngOnInit() {
	}
}
