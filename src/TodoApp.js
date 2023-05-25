import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import EditableTodoList from "./EditableTodoList";
import TodoForm from "./TodoForm";

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp({ initialTodos }) {
  const [todos, setTodos] = useState(initialTodos);

  /** add a new todo to list */
  function create(todo) {
    let newTodo = { ...todo, id: uuid() };
    setTodos((todos) => [...todos, newTodo]);
  }

  /** update a todo with updatedTodo */
  function update(updatedTodo) {
    let newTodos = [...todos];
    for (let i = 0; i < newTodos.length; i++) {
      if (newTodos[i].id === updatedTodo.id) {
        newTodos[i] = updatedTodo;
      }
    }
    setTodos(newTodos);
  }

  /** delete a todo by id */
  function remove(id) {
    const newTodos = [...todos];
    for (let i = 0; i < newTodos.length; i++) {
      if (newTodos[i].id === id) {
        newTodos.splice(i, 1);
      }
    }
    setTodos(newTodos);
  }

  return (
    <main className="TodoApp">
      <div className="row">

        <div className="col-md-6">
          {todos.length > 0 &&
            <EditableTodoList />
          }
          {todos.length === 0 &&
            <span className="text-muted">You have no todos.</span>
          }
        </div>

        <div className="col-md-6">
          {todos.length > 0 &&
            <section className="mb-4">
            <h3>Top Todo</h3>
            <TopTodo />
          </section>
          }

          <section>
            <h3 className="mb-3">Add Nü</h3>
            <TodoForm initialFormData={{title:"", description:"", priority:0}} handleSave={create} />
          </section>
        </div>

      </div>
    </main>
  );
}

export default TodoApp;