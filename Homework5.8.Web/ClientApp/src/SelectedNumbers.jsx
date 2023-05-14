import React from "react";

class SelectedNumbers extends React.Component {
    onLockClick = () => {
        this.props.onLockClick()
    }
    render() {       
        const { number, isLocked } = this.props
        console.log(`isLocked: ${isLocked}, ${number}`)
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