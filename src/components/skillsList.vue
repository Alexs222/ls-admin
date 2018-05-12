<template lang="pug">
    .skills-list
        .skill-title {{skillType}}
        table
            skills-item(
                v-for="skill in skills"
                v-if="checkSkillType(skillType) === skill.type"
                :key="skill.id"
                :skill="skill"
            )
        skill-input
        br
        hr
</template>

<script>
import skillsItem from "./skillsItem";
import skillInput from "./skillInput";

export default {
    components: {
        skillsItem, skillInput
    },
    props: {
        skillType: String,
        skills: Array
    },
    methods: {
        checkSkillType(skillGroupName) {
            switch (skillGroupName) {
                case 'frontend':
                    return 1;
                case 'workflow':
                    return 2;
                case 'beckend':
                    return 3;
            }
        }
    }
}
</script>

