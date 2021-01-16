
import { GroupPreview } from './GroupPreview.jsx'
import { AddNewGroup } from './AddNewGroup.jsx'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

export function GroupList(props) {
    return (
        <DragDropContext onDragEnd={props.onDragEnd}>
            <section className="group-list-container">
                <Droppable droppableId={'moveGroups'}  direction="horizontal" type="group">
                    {(provided) => (
                        <ul className="group-list clean-list" {...provided.droppableProps} ref={provided.innerRef}>
                            {props.groups.map((group, index) =>
                                <GroupPreview key={group.id} group={group} index={index} />
                            )}
                            {provided.placeholder}
                        </ul>

                    )}

                </Droppable>
                <AddNewGroup boardId={props.boardId} />
            </section>
        </DragDropContext>
    )
}