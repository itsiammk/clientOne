export const srpReducer = (state, action) => {
    console.log(state,'state')
    switch (action.type){
        case 'COUNT':
            return{
                cartCount: state.cartCount+1
            }
    }
}