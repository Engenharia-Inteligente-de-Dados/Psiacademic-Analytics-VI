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
  }

  mostrarVersao() {

		const versao = environment ? environment.VERSION_APP : '0.0.0';
		const aplicacao =  'Psiacademic Analytics VI';
		const ambiente = environment.production
			? 'Produção'
			: 'Homologação';
		console.log(
			`%c${aplicacao}`,
			'color: hsl(55, 100%, 50%); font-size: 20px'
		);
		console.log(
			`%cVersão: ${versao} - ${ambiente}`,
			'color: hsl(55, 100%, 50%); font-size: 15px'
		);

	}
}


