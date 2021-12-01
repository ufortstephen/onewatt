export const state = () => ({
    counter: 0,

    products: [{
        name: 'Clean power electircity',
        id: 1,
        img: 'solar-panel.png'
    },
    { name: 'Clean Water', id: 5, img: 'waterr.png' },
    { name: 'Clean Gas', id: 5, img: 'plant.png' },
    { name: 'eMobility', id: 5, img: 'emob.png' },


    ]
})

export const mutations = {
    increment(state) {
        state.counter++
    }
}


export const getters = {
    getComponent: (state) => {
        return state.products.filter((product) => product.component)
    },

}
export const actions = {

}