import React from "react";

class RandomNumberRow extends React.Component {

    onSelectClick = () => {
       this.props.onSelectClick(this.props.number)
    }

    render() {
        const { number } = this.props.number
        const { isSelected, isLocked } = this.props
        return <>
            <tr>
                <th>{number}</th>
                <th>
                    <button disabled={isLocked} className={`btn ${isSelected ? 'btn-danger' : 'btn-primary'}`} onClick={this.onSelectClick}>
                        {isSelected ? 'Remove From Selected' : 'Add to Selected'}</button>
                </th>
            </tr>
        </>
    }
}

export default RandomNumberRow
