<template lang="pug">
    .tabs
        ul.list
            li.item(v-for="tab in tabs")
                a(href="").link {{tab}}
</template>

<script>
export default {
    data() {
        return {
            tabs: ["Tab 1", "Tab 2", "Tab 3"]
        }
    }
}
</script>

<style lang="scss" src="styles/tabs.scss" scoped></style>

