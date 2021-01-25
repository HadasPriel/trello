import { HorizontalBar } from 'react-chartjs-2';

export function BarBoard(props) {

    const groupCardMap = props.board.groups.reduce((cardsMapAcc, group) => {
        cardsMapAcc[group.title] = group.cards.length
        return cardsMapAcc
    }, {})


    const myData = {
        labels: Object.keys(groupCardMap),
        datasets: [{
            label: 'tasks',
            data: Object.values(groupCardMap),
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ]

        }]
    }

    return (
        <section style={{ width: '40%' }}>
            <HorizontalBar data={myData}
                options={{
                    title: { display: true, text: 'Total cards per group', fontColor: '#ffff' },
                    legend: { display: false },
                    ticks: { precision: 0 },
                    scales: {
                        yAxes: [{
                            ticks: {
                                fontColor: '#ffff',
                                beginAtZero: true,
                                userCallback: function (label, index, labels) {
                                    // when the floored value is the same as the value we have a whole number
                                    if (Math.floor(label) === label) {
                                        return label;
                                    }

                                }
                            }
                        }],
                        xAxes: [{
                            ticks: {
                                fontColor: '#ffff'

                            }
                        }]
                    }
                }} />
        </section>
    )
}
