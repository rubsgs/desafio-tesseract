import { UsuarioModel } from './usuario-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
export class Usuario extends UsuarioModel{
	private urlUsuario = "https://api.github.com/users/";
	followers: any[];
	repos: any[];

	constructor(usuario: UsuarioModel,private http: HttpClient){
		super();
		this.login = usuario.login;
		this.id = usuario.id;
		this.node_id = usuario.node_id
		this.avatar_url = usuario.avatar_url
		this.gravatar_id = usuario.gravatar_id;
		this.url = usuario.url;
		this.html_url = usuario.html_url;
		this.followers_url = usuario.followers_url;
		this.gists_url = usuario.gists_url;
		this.starred_url = usuario.starred_url;
		this.subscriptions_url = usuario.subscriptions_url;
		this.organizations_url = usuario.organizations_url;
		this.repos_url = usuario.repos_url;
		this.events_url = usuario.events_url;
		this.received_events_url = usuario.received_events_url
		this.type = usuario.type;
		this.site_admin = usuario.site_admin;
		this.createdAt = usuario.createdAt;
		this.updatedAt = usuario.updatedAt;
		this.getFollowers().subscribe(followers => {this.followers = followers});
		this.getRepos().subscribe(repos => {this.repos = repos});
	}

	getFollowers(): Observable<any>{
		return this.http.get(this.followers_url);
	}

	getRepos(): Observable<any>{
		return this.http.get(this.repos_url);
	}
}
