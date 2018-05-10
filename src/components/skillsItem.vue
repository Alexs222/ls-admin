<template lang="pug">
  tr
    td {{skill.name}}
    td
        input(type="text" :value="skill.percents")
    td
        button(type="button") Удалить
</template>

<script>
export default {
    props: {
        skill: Object
    }
}
</script>

<style>

</style>


