<template lang="pug">
    .todo
        //- pre {{todos}}
        todo-input(
            @addTodo="addTodo"
        )
        todo-list(
            :todos="todos"
            @removeTodo="removeTodo"
            @checkTodo="checkTodo"
        )
</template>


<script>
import todoInput from "./todoInput";
import todoList from "./todoList";

// import {eventBus} from "../main.js";

export default {
    components: {
        todoInput, todoList
    },
    data() {
        return {
            todos: []
        }
    },
    methods: {
        addTodo(todo) {
            this.todos.push(todo);
        },
        removeTodo(todoId) {
            this.todos = this.todos.filter(item => item.id !== todoId);
        },
        checkTodo(todo) {
            this.todos = this.todos.map(item => item.id === todo.id ? todo : item);
        }
    }
    // mounted() {
        // eventBus.$on('removeTodo', todoId => {
            // this.todos = this.todos.filter(item => item.id !== todoId);
        // })
    // }
};
</script>

<style lang="scss" src="styles/todo.scss" scoped>

</style>


