<template lang="pug">
    .todo-list(v-if="todos.length")
        .content
            ul.list
                li.item(v-for="todo in filteredItems")
                    todo-item(
                        :todo="todo"
                        @removeTodo="removeTodo"
                        @checkTodo="checkTodo"
                    ) 
        .footer
            .footer-content
                .counter
                    | Кол-во заданий: {{filteredItems.length}}
                .filter
                    button(
                        v-for="filter in filters"
                        type="button"
                        @click="filterItems(filter)"
                        :class="{active: currentFilter === filter}"
                        ) {{filter}}
</template>


<script>
import todoItem from './todoItem';

export default {
    components: {
        todoItem
    },
    props: {
        todos: Array
    },
    data() {
        return {
            filters: ['all', 'completed', 'active'],
            currentFilter: 'all'
        }
    },
    computed: {
        filteredItems() {
            switch (this.currentFilter) {
                case 'all':
                    return this.todos
                case 'active':
                    return this.todos.filter(item => item.checked === false)
                case 'completed':
                    return this.todos.filter(item => item.checked)
            }
        }

    },
    methods: {
        removeTodo(todoId) {
            this.$emit('removeTodo', todoId);
        },
        checkTodo(todo) {
            this.$emit("checkTodo", todo);
        },
        filterItems(filterName) {
            this.currentFilter = filterName
        }
    }
}
</script>

<style src="styles/todoList.scss" lang="scss" scoped></style>


