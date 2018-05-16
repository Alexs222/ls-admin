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
import {mapActions, mapGetters} from 'vuex';
import skillsList from "./skillsList";

export default {
    components: {
        skillsList
    },
    data() {
        return {
            // skills: [],
            skillsTypes: ['frontend', 'workflow', 'beckend']
        };
    },
    computed: {
        ...mapGetters(['skills'])
    },
    methods: {
        ... mapActions(['fethSkills'])
    },
    mounted() {
        this.fethSkills();
    }
};
</script>

