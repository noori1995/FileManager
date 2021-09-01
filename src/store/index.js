import {createStore}from 'vuex';
import rootMutations from './mutations';
import rootActions from './actions';
import rootGetters from './getters'

const store = createStore({
    state(){
        return{
            username:"3301",
            files:[{id:1,type:"folder",name:"Contractor Reports",foldersCount:0,filesCount:3}
                ,{id:2,type:"folder",name:"Contractor Invoices",foldersCount:0,filesCount:0}
                ,{id:3,type:"folder",name:"FES Reports",foldersCount:0,filesCount:0}
                ,{id:4,type:"folder",name:"FES Invoices",foldersCount:0,filesCount:0}
                ,{id:5,type:"folder",name:"Job Files",foldersCount:0,filesCount:0}
                ,{id:6,type:"folder",name:"Letters Recieved",foldersCount:0,filesCount:1}]
        }
    },
    mutations:rootMutations,
    actions:rootActions,
    getters:rootGetters
});

export default store;