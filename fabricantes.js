document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('container-graphic', {
        chart: {
            type: 'pie',
            backgroundColor: '#eeeeee'
        },
        title: {
            text: 'Valor da empresa dos maiores fabricantes Japoneses'
        },
        series: [{
            name: 'Valor da Empresa (Bilhões $)',
            colorByPoint: true,
            data: [
                { name: 'Toyota', y: 250 },
                { name: 'Nissan', y: 50 },
                { name: 'Honda', y: 50 },
                { name: 'Mazda', y: 8 },
                { name: 'Suzuki', y: 20 },
                { name: 'Daihatsu', y: 3 },
                { name: 'Subaru', y: 10 },
                { name: 'Mitsubishi', y: 20 }
            ],
            dataLabels: {
                style: {
                    fontSize: '12px'
                }
            }
        }]
    });
});
