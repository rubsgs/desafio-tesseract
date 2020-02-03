import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { UsuarioModel } from './usuario-model';

@Injectable({
	providedIn: 'root'
})
export class UsuariosService {
	private urlGitHub = "https://api.github.com";

	constructor(private http: HttpClient) { }

	getUsuarios(): Observable<UsuarioModel[]>{
		return this.http.get<UsuarioModel[]>(this.urlGitHub + "/orgs/grupotesseract/public_members");
	}

	getUsuario(nome: string): Observable<UsuarioModel>{
		return this.http.get<UsuarioModel>(this.urlGitHub + "/users/" + nome);
	}
}
