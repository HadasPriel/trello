import { CardPreview } from './CardPreview.jsx'

export function CardList(props) {
    return (
        <ul className="card-list">
            { props.cards.map(card =>
                <li key={card.id} className="card">
                    <CardPreview card={card} groupId={props.groupId} />
                </li>)}
        </ul>
    )
}