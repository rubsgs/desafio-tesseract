import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Usuario } from '../usuario';
import { UsuariosService } from '../usuarios.service';
import { HttpClient } from '@angular/common/http';
import { faCog } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-detalhes-usuario',
	templateUrl: './detalhes-usuario.component.html',
	styleUrls: ['./detalhes-usuario.component.css']
})
export class DetalhesUsuarioComponent implements OnInit {
	usuario: Usuario;
	faCog = faCog;
	constructor(private route: ActivatedRoute, private usuariosService: UsuariosService, private http: HttpClient) { }

	ngOnInit() {
		this.route.paramMap.subscribe(params => {
			this.usuariosService.getUsuario(params.get("userId")).subscribe(usuario => {this.usuario = new Usuario(usuario, this.http)});
		})
	}

}
