<template lang="pug">
    div
        h1 this is page {{pageId}}
</template>

<script>
import { route } from "vue-router";
export default {
    props: {
        pageId: String
    }
}
</script>
