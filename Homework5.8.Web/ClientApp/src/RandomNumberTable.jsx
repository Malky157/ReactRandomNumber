import React from "react";
import { produce } from "immer";
import { v4 as uuidv4 } from "uuid"
import RandomNumberRow from "./RandomNumberRow";
import SelectedNumbers from "./SelectedNumbers";

class RandomNumberTable extends React.Component {
    state = {
        numbers: [],
        selectedNumbers: [],
        lockedNumbers: []
    }

    onAddClick = () => {
        const id = uuidv4()
        const number = this.getRandomNumber(100, 1000)
        const nextState = produce(this.state, draftState => {
            draftState.numbers.push({ id, number });
        })
        this.setState(nextState);

    }
    onSelectClick = (n) => {
        const { selectedNumbers } = this.state
        if (selectedNumbers.includes(n.id)) {
            this.setState({ SelectedNumbers: selectedNumbers.filter(i => i !== n.id) })
        }
        else {
            this.setState({
                selectedNumbers: [...selectedNumbers, n]
            })
        }
    }
    onLockClick = (n) => {
        const { lockedNumbers } = this.state
        if (lockedNumbers.includes(n.id)) {
            this.setState({ lockedNumbers: lockedNumbers.filter(i => i !== n.id) })
        }
        else {
            this.setState({ lockedNumbers: [...lockedNumbers, n] })
        }
    }
    getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    render() {
        const { numbers, selectedNumbers, lockedNumbers } = this.state
        return <>
            <div className="container" style={{ marginTop: 60 }}>
                <div className="row">
                    <div className="col-md-12">
                        <button className="btn btn-success btn-lg w-100" onClick={this.onAddClick}>Add</button>
                    </div>
                </div>
                <div style={{ maxHeight: 500, overflowY: scroll }}>
                    <table className="table table hover table striped table borderd">
                        <thead>
                            <tr>
                                <th style={{ width: '25%' }}>Number</th>
                                <th>Add/Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {numbers.map((n) => <RandomNumberRow
                                key={n.id} number={n}
                                isSelected={selectedNumbers.includes(n.id)}
                                onSelectClick={() => this.onSelectClick(n)}
                                isLocked={lockedNumbers.includes(n.id)}
                            />)}
                        </tbody>
                    </table>
                </div>
            </div>
            {!!selectedNumbers.length &&
                <div className="row p-5 rounded" >
                    <div className="col-md-6 col-md-offset-3">
                        <h3>Selected Numbers</h3>
                        <ul className="list-group">
                            {selectedNumbers.map((n) => <SelectedNumbers
                                key={n.id} number={n}
                                isLocked={lockedNumbers.includes(n.id)}
                                onLockClick={() => this.onLockClick(n)}
                            />)}
                        </ul>
                    </div>
                </div>
            }
        </>
    }
}
export default RandomNumberTable