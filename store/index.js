export const state = () => ({
    counter: 0,

    products: [{
            name: 'Clean power electircity',
            id: 1,
            img: 'cleanPower.jpg'
        },
        { name: 'Clean Water', id: 5, img: 'waterr.png' },
        { name: 'eMobility', id: 5, img: 'solar-panel.png' },
        { name: 'Smart Home', id: 5, img: 'solar-panel.png' },


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