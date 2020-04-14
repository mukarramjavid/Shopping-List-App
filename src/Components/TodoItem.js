import React, { Component } from "react";
import { ListGroupItem } from "react-bootstrap";
import "./TodoItem.css";
export default class TodoItem extends Component {
  render() {
    const { item, handleDelete, handleEdit } = this.props;
    return (
      <>
        <ListGroupItem className="text-capitalize">
          {item}
          <span className="text-danger pull-right" onClick={handleDelete}>
            <i className="fas fa-trash"></i>
          </span>
          <span className="text-success pull-right" onClick={handleEdit}>
            <i className="fas fa-pen"></i>
          </span>
        </ListGroupItem>
      </>
    );
  }
}
