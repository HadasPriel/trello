

export function ActivityPreview(props) {

    return (
        <li className="activity-preview">
            <div className="user-img inline-block" style={{ backgroundImage: `url(${props.activity.byMember.imgUrl})` }}></div>
            <span>{props.activity.byMember.fullname} </span>
            <span> {props.activity.txt} </span>
        </li>

    )
}