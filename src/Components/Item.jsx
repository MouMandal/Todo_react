
import Content from './Content';
function Item({ newItem, onDeleteClick }) {
    return (
        <div className="kg-items">
            {newItem.map((item, key) => (
                <Content key={key} context={item.content} date={item.date}  onDeleteClick={ onDeleteClick}></Content>
            ))}
        </div>
    )

}
export default Item