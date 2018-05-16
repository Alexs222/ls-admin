<template lang="pug">
    .skill-input
        input(type="text" v-model="skillName" @keydown.inter="addNewSkill")
        button(type="button" @click="addNewSkill") Сохранить
</template>

<script>
import {mapMutations} from 'vuex';

export default {
    props: {
        type: Number
    },
    data() {
        return {
            skillName: ""
        }
    },
    methods: {
        ...mapMutations(['addSkill']),
        addNewSkill(){
            const newSkill = {
                id: Math.round(Math.random() * 1000000),
                name: this.skillName,
                percents: 0,
                type: this.type
            };

            this.addSkill(newSkill);

            
            
        }
    }
}
</script>

<style>

</style>
