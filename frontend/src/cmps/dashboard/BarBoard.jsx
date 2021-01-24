import { Bar } from 'react-chartjs-2';

export function BarBoard(props) {
    let todos = 0
    let complited = 0
    let uncomplited = 0
    props.board.groups.forEach(group => {
        group.cards?.forEach(card => {
            card.checklists.forEach(checklist => {
                checklist.todos.forEach(todo => {
                    todos++
                    if (todo.isDone) complited++
                    else uncomplited++
                })
            })
        })
    })

    const myData = {
        labels: ['All', 'In Progress', 'Done'],
        datasets: [{
            label: 'tasks',
            data: [todos, complited, uncomplited],
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
            <Bar data={myData} options={{ title: { display: true, text: 'tasks statistics' }, legend: { display: false } }} />
        </section>
    )
}
