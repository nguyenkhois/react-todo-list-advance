import React, { Component } from 'react';
import { connect } from 'react-redux';

import { extraActions } from '../actions/extra.action';

const mapDispatchToProps = {
    removeDeleted: extraActions.removeDeleted
};

const mapStateToProps = (state) => {
    return {
        deleted: state.todos.filter((item) => item.isDeleted) || []
    };
};

export class DeletedTasks extends Component {
    handleClick = (event) => {
        event.preventDefault();
        this.props.removeDeleted();
    }

    render(){
        return(
            <div className="deleted-tasks">
                <p>Deleted tasks</p>
                <p>{ this.props.deleted.length } deleted task(s)</p>
                <ul>
                    {this.props.deleted.map((item, key) => {
                        return (
                            <li key={key}>{item.description}</li>
                        )
                    })}
                </ul>
                <button className="button-big" 
                        onClick={(e)=>this.handleClick(e)}>
                    Permanently delete
                </button>
            </div>
        );
    }
};

export const DeletedTaskX = connect(mapStateToProps, mapDispatchToProps)(DeletedTasks);



