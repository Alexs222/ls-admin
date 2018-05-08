<template lang="pug">
    .todo-input
        input(
            type="text" 
            placeholder="Задание"
            @keydown.enter="addTodo"
            v-model="todo.name" 
        ).input
</template>


<script>
let uniqId = 1;

export default {
    data() {
        return {
            todo: {
                id: 0,
                name: '',
                checked: false
            }
        }
    },
    methods: {
        addTodo() {
            uniqId++;
            this.todo.id = uniqId
            this.$emit('addTodo', {...this.todo})
            this.todo.name = "";
        }
    }
}
</script>

<style lang="scss" src="styles/todoInput.scss" scoped>

</style>


