import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


function getDatao(name) {

    let data = JSON.parse(localStorage.getItem('name'));
    if (data) {
        return data
    }

}
function getData(name) {

    let data = localStorage.getItem(name)
    if (data) {
        return data
    }
}
const store = new Vuex.Store({
    strict: true,
    state: {
        data: getDatao("data"),
        arr2: getData("arr2") || '',
        arr3: getDatao("arr3") || '',
        arr4: getData("arr4") || '',
        src: getData("src") || '',
        input: getData("input") || ''

    },
    mutations: {
        saveData(state, val) {
            state.data = val
            localStorage.setItem('data', JSON.stringify(state.data))
        },
        setData(state, val) {
            state.arr2 = val
            localStorage.setItem('arr2', state.arr2)
        },
        saveArr3(state, val) {
            state.arr3 = val
            localStorage.setItem('arr3', JSON.stringify(state.arr3))
        },
        saveSrc(state, val) {
            state.src = val
            localStorage.setItem('src', state.src)
        },
        setDatao(state, val) {
            state.arr4 = val
            localStorage.setItem('arr4', state.arr4)
        },
        setText(state, val) {
            state.input = val
            localStorage.setItem('input', state.input)
        },
    },
    actions: {
        saveData(store, data) {
            store.commit('saveData', data)
        },

        setData(store, arr2) {
            store.commit('setData', arr2)
        },
        saveSrc(store, src) {
            store.commit('saveSrc', src)
        },
        saveArr3(store, arr3) {
            store.commit('saveArr3', arr3)
        },
        setDatao(store, arr4) {
            store.commit('setDatao', arr4)
        },
        setText(store, input) {
            store.commit('setText', input)
        },
    }
})
export default store