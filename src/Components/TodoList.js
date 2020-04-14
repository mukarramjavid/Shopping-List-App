import React, { Component } from "react";
import TodoItem from "./TodoItem";
import { Panel, Button, ListGroup } from "react-bootstrap";
export default class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return (
      <>
        <Panel>
          <Panel.Body>
            <ListGroup>
              {items.map((item) => {
                return (
                  <TodoItem
                    key={item.id}
                    item={item.item}
                    handleDelete={() => handleDelete(item.id)}
                    handleEdit={() => handleEdit(item.id)}
                  />
                );
              })}
            </ListGroup>

            <Button bsStyle="danger" block onClick={clearList}>
              Clear List
            </Button>
          </Panel.Body>
        </Panel>
      </>
    );
  }
}
