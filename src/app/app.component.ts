import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Psiacademic Analytics VI';
  constructor() {
    this.mostrarVersao();

    //document.getElementsByClassName(`ion-page`)[0].classList.remove(`ion-page`);
  }

  mostrarVersao() {

		const versao = environment ? environment.VERSION_APP : '0.0.0';
		const aplicacao =  'Psiacademic Analytics - Visualização de Informação';
		const ambiente = environment.production
			? 'Produção'
			: 'Homologação';
		console.log(
			`%c${aplicacao}`,
			'color: hsl(221, 100%, 50%); font-size: 15px'
		);
		console.log(
			`%cVersão: ${versao} - ${ambiente}`,
			'color: hsl(221, 100%, 50%); font-size: 15px'
		);
	}
}


