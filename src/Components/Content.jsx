import { MdDelete } from "react-icons/md"



function Content({context,date, onDeleteClick}) {
    return (<div className="container">
        <div className="row kg-row">
            <div className="col-6">
                {context}
            </div>
            <div className="col-4">
                {date}
            </div>
            <div className="col-2">

                <button type="button" className="btn btn-danger kg-button" onClick={()=>onDeleteClick(context)}>
                    <MdDelete></MdDelete>
                </button>
            </div>
        </div>
    </div>

    )
}
export default Content