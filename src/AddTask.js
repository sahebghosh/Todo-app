import React, { Component } from 'react'
import { black } from 'color-name';

class AddTask extends Component {
    state = {
        content: ''
    }

    handelChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handelSubmit = (e) => {
        e.preventDefault();
        this.props.addTask(this.state);
        this.setState({
            content: ''
        })
    }
    render() {

        return (
            <div>
                <form onSubmit={this.handelSubmit}>
                    <label style={{ color: black, fontSize: 20 }}> <strong> Add new Todo's which you want to perform later!!!!!</strong></label>
                    <input type="text" onChange={this.handelChange} value={this.state.content} required></input>
                    <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                    </button>
                </form>
            </div>
        )
    }

}

export default AddTask