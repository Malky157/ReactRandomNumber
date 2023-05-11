import React from "react";

class SelectedNumbers extends React.Component {
    onLockClick = () => {
        this.props.onLockClick(this.props.number)
    }
    render() {
        const { number, isLocked } = this.props
        return <>
            <li className="list-group-item">
                {number}
                <button className="ms-5 btn btn-primary" onClick={this.onLockClick} >
                    {isLocked ? 'Unlock' : 'Lock'}
                </button>
            </li>
        </>
    }
}
export default SelectedNumbers