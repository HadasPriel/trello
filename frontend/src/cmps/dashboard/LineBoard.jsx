import { Line } from 'react-chartjs-2';

export function LineBoard(props) {
    console.log(props.board);
    let membersActivities = {}
    props.board.activities.forEach(activity => {
        if (membersActivities[activity.byMember.fullname]) membersActivities[activity.byMember.fullname]++
        else membersActivities = { ...membersActivities, [activity.byMember.fullname]: 1 }
    })
    console.log(membersActivities);


    const myData = {
        labels: Object.keys(membersActivities),
        datasets: [{
            data: Object.values(membersActivities),
            backgroundColor: [
                // '#FF6384',
                // '#36A2EB',
                '#FFCE56'
            ],
            hoverBackgroundColor: [
                // '#FF6384',
                // '#36A2EB',
                '#FFCE56'
            ]

        }]
    }

    return (
        <section>
            <Line
                data={myData} options={{ title: { display: true, text: 'Activities In The Board' }, legend: { display: false } }}

            />
        </section>
    )
}



