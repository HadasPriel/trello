import { GroupPreview } from './GroupPreview.jsx'

export function GroupList(props) {
    return (
        <ul className="group-list clean-list">
            { props.groups.map(group =>
                <li key={group.id} className="group">
                    <GroupPreview group={group} />
                </li>)}
        </ul>
    )
}