import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
	selector: 'app-barra-superior',
	templateUrl: './barra-superior.component.html',
	styleUrls: ['./barra-superior.component.css']
})
export class BarraSuperiorComponent implements OnInit {
	faSearch = faSearch;
	constructor(private router: Router) { }

	ngOnInit() {
	}

	redirecionaBusca(busca: string){
		this.router.navigate(["/busca", busca])
	}
}
