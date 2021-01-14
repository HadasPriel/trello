export function CardPreview(props) {
    const { card, groupId } = props
    return (
        <article className="card-preview">
            <p>{card.title}</p>
            <p>This is group ID {groupId}</p>
            
        </article>
    )
}