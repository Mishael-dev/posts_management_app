
import {create} from "zustand"


export const formStore = create((set)=> ({
    formData : {
        name : '',
        id : '',
        intro : '',
    },

    setFormData : (e)=> {set((store)=> ({formData : {...store.formData, [e.target.name] : e.target.value}}))},

    resetFormData : ()=> {set(()=> ({formData : {name : "", id:"",intro:""}}))}
}))