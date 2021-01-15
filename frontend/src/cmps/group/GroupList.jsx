
import { GroupPreview } from './GroupPreview.jsx'
import { AddNewGroup } from './AddNewGroup.jsx'

export function GroupList(props) {
    return (
        <section className="group-list-container">
            <ul className="group-list clean-list">
                {props.groups.map(group =>
                    <li key={group.id} className="group">
                        <GroupPreview group={group} />
                    </li>)}
            </ul>
            <AddNewGroup boardId={props.boardId} />
        </section>
    )
}