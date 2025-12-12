import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders TodoList component correctly', () => {
    render(<TodoList />);
    expect(screen.getByText('Todo List')).toBeInTheDocument();
  });

  test('displays initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo');
    const button = screen.getByText('Add Todo');

    fireEvent.change(input, { target: { value: 'New Todo Item' } });
    fireEvent.click(button);

    expect(screen.getByText('New Todo Item')).toBeInTheDocument();
  });

  test('toggles todo completion status', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');

    // Check initial state (not completed)
    expect(todoItem).not.toHaveStyle('text-decoration: line-through');

    // Click to toggle
    fireEvent.click(todoItem);

    // Check completed state
    expect(todoItem).toHaveStyle('text-decoration: line-through');

    // Click again to toggle back
    fireEvent.click(todoItem);

    // Check not completed state again
    expect(todoItem).not.toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');
    expect(todoItem).toBeInTheDocument();

    // Find and click the delete button for this todo
    const deleteButtons = screen.getAllByText('Delete');
    fireEvent.click(deleteButtons[0]);

    // Verify the todo is removed
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });

  test('does not add empty todos', () => {
    render(<TodoList />);
    const button = screen.getByText('Add Todo');
    
    // Get initial todo count
    const initialTodos = screen.getAllByRole('listitem');
    const initialCount = initialTodos.length;

    // Try to add empty todo
    fireEvent.click(button);

    // Verify count hasn't changed
    const currentTodos = screen.getAllByRole('listitem');
    expect(currentTodos.length).toBe(initialCount);
  });
});