import React, { Component } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { Grid, Row, Col } from "react-bootstrap";
import uuid from "uuid"; //for unique id's

export default class Compound extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false,
  };
  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.item === "") {
      alert("Insert Item First");
    } else {
      const newItem = {
        id: this.state.id,
        item: this.state.item,
      };

      const updatedItems = [...this.state.items, newItem];

      this.setState({
        items: updatedItems,
        item: "",
        id: uuid(),
        editItem: false,
      });
    }
  };
  clearList = () => {
    this.setState({
      items: [],
    });
  };
  handleDelete = (id) => {
    const filteredItem = this.state.items.filter(
      (delItem) => delItem.id !== id
    );
    this.setState({
      items: filteredItem,
    });
  };
  handleEdit = (editId) => {
    const filteredItem = this.state.items.filter(
      (delItem) => delItem.id !== editId
    );
    const selectedItem = this.state.items.find(
      (edit_Item) => edit_Item.id === editId
    );

    this.setState({
      items: filteredItem,
      item: selectedItem.item,
      editItem: true,
      id: editId,
    });
  };
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col md={2} xsHidden></Col>
          <Col md={8} xs={12}>
            <h1 className="text-center">Item Input</h1>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <h1 className="text-center">Item List</h1>
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </Col>
          <Col md={2} xsHidden></Col>
        </Row>
      </Grid>
    );
  }
}
