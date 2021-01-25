import { Pie } from 'react-chartjs-2';

export function PieBoard(props) {
    let membersTasks = {}
    props.board.groups.forEach(group => {
        group.cards.forEach(card => {
            card?.members.forEach(member => {
                if (membersTasks[member.fullname]) membersTasks[member.fullname]++
                else membersTasks = { ...membersTasks, [member.fullname]: 1 }
            })

        })
    })

    const data = {
        labels: Object.keys(membersTasks),
        datasets: [{
            data: Object.values(membersTasks),
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ]

        }]
    }

    return (
        <section>
            <Pie data={data} options={{ title: { display: true, text: 'members statistics' } }} />
        </section>
    )
}
