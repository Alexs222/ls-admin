<template lang="pug">
    .tabs
        ul.list
            li.item(v-for="tab in tabs")
                router-link(
                    :to="tab.href"
                ).link {{tab.name}}
                //- a(href="").link {{tab}}
</template>

<script>
export default {
    data() {
        return {
            // tabs: ["Tab 1", "Tab 2", "Tab 3"]
            tabs: [
                {name: 'Tab 1', href: "/"},
                {name: 'Tab 2', href: "/pages/20"}
            ]
        }
    }
}
</script>

<style lang="scss" src="styles/tabs.scss" scoped></style>

