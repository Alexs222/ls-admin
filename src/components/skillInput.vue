<template lang="pug">
    .skill-input
        input(type="text" keydown.inter="addNewSkill")
        button(type="button" @click="addNewSkill") Сохранить
</template>

<script>
export default {
    methods: {
        addNewSkill(){
            
        }
    }
}
</script>

<style>

</style>
