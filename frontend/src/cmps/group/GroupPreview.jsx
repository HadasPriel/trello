
import { CardList } from '../card/CardList'

export function GroupPreview(props) {
    const { group } = props
    return (
        <article className="group-preview">
            <p>{group.title}</p>
            {group.cards && <CardList groupId={group.id} cards={group.cards} />}
            <p>Add new Card</p>
        </article>
    )
}