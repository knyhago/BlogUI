import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import './addblog.css';
import Sidebar from "./sideList";

class Addblog extends Component {
    constructor() {
        super();

        this.state = {
            heading: "",
            desc: "",
            redirect: false
        };

        this.handleTopic = (event) => {
            this.setState({ heading: event.target.value });
        };

        this.handleBlog = (e) => {
            this.setState({ desc: e.target.value });
        };

        this.handleSubmit = (e) => {
            const desc = this.state.desc;
            const heading = this.state.heading;
            const data = { heading, desc };
            e.preventDefault();
            fetch('https://blogap1-46c3501b7198.herokuapp.com/postblog', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            })
                .then(() => {
                    console.log("added");
                    this.setState({ redirect: true });
                });
        };
    }

    render() {
        if (this.state.redirect) {
            return <Navigate to="/" />;
        }

        return (
            <div>
                <Sidebar />
                <div className="container">
                    <div className="form addblog text-monospace">
                        <div>
                            Add Blogs
                        </div>
                        <div>
                            <div className="text-monospace">
                                <label>Topic</label>
                                <input type="text" onChange={this.handleTopic}></input>
                            </div>
                            <div className="text-monospace">
                                <label>Blog</label>
                                <input type="text" onChange={this.handleBlog}></input>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-success" onClick={this.handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Addblog;
