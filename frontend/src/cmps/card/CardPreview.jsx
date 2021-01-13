export function CardPreview(props) {
    const { card } = props
    return (
        <article className="card-preview">
            <p>{card.title}</p>
        
           
        </article>
    )
}