import React from "react";
import ListWrapper from "./List.Style";

const List = props => (
  <ListWrapper>
    <ul>
      {props.items.map((item, index) => (
        <li key={index}>
          <label class="container">
            {item}
            <input type="checkbox" />
            <span class="checkmark" />
          </label>
        </li>
      ))}
    </ul>
  </ListWrapper>
);

export default List;
