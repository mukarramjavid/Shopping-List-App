import React, { Component } from "react";
import { FormGroup, InputGroup, FormControl, Panel } from "react-bootstrap";
export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <>
        <Panel>
          <Panel.Body>
            {" "}
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <InputGroup>
                  <InputGroup.Addon>
                    <i className="fas fa-book text-primary"></i>
                  </InputGroup.Addon>
                  <FormControl
                    type="text"
                    className="text-capitalize"
                    placeholder="Add a todo Item"
                    value={item}
                    onChange={handleChange}
                  />
                </InputGroup>
              </FormGroup>
              <button
                type="submit"
                className={
                  editItem
                    ? "btn btn-success btn-block"
                    : "btn btn-primary btn-block"
                }
              >
                {editItem ? "Edit Item" : "Add Item"}
              </button>
            </form>
          </Panel.Body>
        </Panel>
      </>
    );
  }
}
