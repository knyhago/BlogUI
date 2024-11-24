import React, { Component } from 'react';
import './update.css';  // Assuming you want to add additional custom CSS

const closeUpdate = () => {
    window.location.reload(); // Reload page to close the form (or handle closing more smoothly)
}

class Update extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topicc: this.props.heading || "",
            descc: this.props.desc || ""
        };
    }

    descHandle = (e) => {
        this.setState({ descc: e.target.value });
    }

    topicHandle = (e) => {
        this.setState({ topicc: e.target.value });
    }

    submitUpdate = () => {
        const { topicc, descc } = this.state;
        const updata = { topic: topicc, desc: descc };

        fetch(`https://blogapis-h3ny.onrender.com/update/${this.props.id}`, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updata)
        })
            .then(response => response.json())
            .then(data => {
                alert('Blog updated successfully');
                window.location.reload(); // Reload the page after update
            })
            .catch(err => {
                console.error('Error updating blog:', err);
                alert('Error updating blog');
            });
    }

    render() {
        return (
            <div id="updateOpen" className='update-overlay'>
                <div className="update-container">
                    <h2 className="text-center mb-4">Update Blog</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="topicText">Topic</label>
                            <input
                                type="text"
                                className="form-control"
                                id="topicText"
                                value={this.state.topicc}
                                onChange={this.topicHandle}
                                placeholder="Enter blog topic"
                            />
                        </div>

                        <div className="form-group mt-3">
                            <label htmlFor="descText">Description</label>
                            <textarea
                                className="form-control"
                                id="descText"
                                value={this.state.descc}
                                onChange={this.descHandle}
                                rows="4"
                                placeholder="Enter blog description"
                            />
                        </div>
                    </form>

                    <div className="d-flex justify-content-between mt-4">
                        <button className="btn btn-danger" onClick={closeUpdate}>Close</button>
                        <button className="btn btn-success" onClick={this.submitUpdate}>Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Update;
