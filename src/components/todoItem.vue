<template lang="pug">
    .todo-item
        label.label(:class="{checked: todo.checked}")
            .input-block
                input(
                    type="checkbox"
                    @change="checkTodo"
                    :checked="todo.checked" 
                ).input
            .title {{todo.name}}
        .button
            button(
                type="button"
                @click="removeTodo"
            ).remove
                | x
</template>

<script>
// import {eventBus} from '../main.js'

export default {
    props: {
        todo: Object
    },
    methods: {
        removeTodo() {
            // eventBus.$emit('removeTodo', this.todo.id)
            this.$emit('removeTodo', this.todo.id);
        },
        checkTodo(e) {
            const todoItem = {
                ...this.todo,
                checked: e.target.checked
            }
            this.$emit('checkTodo', todoItem)
        }
    }
}
</script>

<style src="styles/todoItem.scss" lang="scss" scoped></style>

