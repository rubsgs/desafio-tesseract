import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { UsuariosService } from '../usuarios.service';
import { UsuarioModel } from '../usuario-model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-lista-usuarios',
	templateUrl: './lista-usuarios.component.html',
	styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
	listaUsuarios: UsuarioModel[];

	constructor(private route: ActivatedRoute, private usuariosService: UsuariosService, private router: Router) { 
		usuariosService.getUsuarios().subscribe(listagem => {
			this.listaUsuarios = listagem;

			//Verifica se a URL é a da busca
			if(this.route.snapshot.params.hasOwnProperty("strBusca")){
				this.route.paramMap.subscribe(params =>{
					let busca = params.get("strBusca");
					if(busca.trim() != ""){
						let listaTemp:UsuarioModel[] = [];

						//Se o login tiver uma substring igual a informada na busca, inclui no array
						this.listaUsuarios.forEach(function(usuario){
							if(usuario.login.toLowerCase().indexOf(busca.toLowerCase()) >= 0){
								listaTemp.push(usuario);
							}
						});
						this.listaUsuarios = listaTemp;
					} else {
						this.router.navigate(["/"]);
					}
				});
			}
		});
		
	}

	ngOnInit() {
	}
}
