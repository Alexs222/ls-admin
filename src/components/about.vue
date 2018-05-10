<template lang="pug">
    .about-section
        h1 Страница "Обо мне"
        skills-list(
            v-for="skillType in skillsTypes"
            :key="skillType"
            :skillType="skillType"
            :skills="skills"
        )
</template>

<script>
import skillsList from "./skillsList";

export default {
    components: {
        skillsList
    },
    data() {
        return {
            skills: [],
            skillsTypes: ['frontend', 'workflow', 'beckend']
        };
    },
    mounted() {
        fetch('/src/data.json').then(data => {
            return data.json()
        }).then(responce => {
            this.skills = responce;
        })
    }
};
</script>

