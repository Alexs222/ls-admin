const skills = {
    state: {
        data: []
    }, // данные модуля
    getters: {
        skills(state) {
            return state.data
        }
    }, // набор методов что бы мы могли данные из хранилища забрать
    mutations: {
        addSkill(state, skill) {
            state.data.push(skill)
        },
        removeSkill(state, skillId) {
            state.data = state.data.filter(item => item.id !== skillId);
        }
    }, // что бы мы могли данные как то мутировать (например: добавить скилл, удалить скилл и т.д.)
    actions: {
        fethSkills({state, dispatch, commit}) {
            // console.log('action is amitted');
            
            fetch('/src/data.json')
                .then(data => {
                    return data.json()
                })
                .then(responce => {
                    state.data = responce;
                })


            // В общем случае:
            // state = // обращение к объекту state
            // dispatch('') // можем вызвать как който action который есть в хранилище причет их любого модуля который есть в хранилище 
            // commit('') // вызвать мутацию из любого модуля
        }
    } // Что происходит с данными (в основном запросы)
}

export default skills;