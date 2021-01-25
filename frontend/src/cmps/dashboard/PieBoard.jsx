import { Pie } from 'react-chartjs-2';

export function PieBoard(props) {
    const membersTaskMap = props.board.groups.reduce((membersMapAcc, group) => {
        group.cards?.forEach(card => {
            card.members?.forEach(member => {
                const count = membersMapAcc[member.fullname] + 1 || 1
                membersMapAcc[member.fullname] = count
            })
        })
        return membersMapAcc
    }, {})




    const data = {
        labels: Object.keys(membersTaskMap),
        datasets: [{
            data: Object.values(membersTaskMap),
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ],
            fontColor: '#ffff'
        }]
    }

    return (
        <section style={{ width: '40%' }}>
            <Pie data={data} options={{
                title: { display: true, text: 'Total card per member', fontColor: '#ffff' },
                legend: { display: false },
                ticks: { precision: 0 },
                scales: {
                    yAxes: [{
                        ticks: {
                            fontColor: '#ffff',
                            beginAtZero: true,
                            userCallback: function (label, index, labels) {
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
