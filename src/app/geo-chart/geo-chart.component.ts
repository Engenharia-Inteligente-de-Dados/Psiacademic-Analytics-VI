import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import 'chartjs-chart-geo';

@Component({
    selector: 'app-geo-chart',
    templateUrl: './geo-chart.component.html',
  styleUrls: ['./geo-chart.component.scss'],
})
export class GeoChartComponent implements OnInit {

    constructor() {
        Chart.register(...registerables);
    }

    ngOnInit(): void {
        this.createGeoChart();
    }

    createGeoChart(): void {
        // Dados fictícios para o exemplo
        const data = {
            labels: ['USA', 'Canada', 'Mexico'],
            datasets: [{
                label: 'Population',
                data: [
                    { feature: { id: 'USA' }, value: 331002651 },
                    { feature: { id: 'CAN' }, value: 37742154 },
                    { feature: { id: 'MEX' }, value: 128932753 }
                ],
                backgroundColor: 'rgba(255, 99, 132, 0.5)'
            }]
        };

        const chart = new Chart('geoChart', {
            type: 'choropleth',
            data: data,
            options: {
                // Opções do gráfico
            }
        });
    }
}