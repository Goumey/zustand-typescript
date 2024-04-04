import { create } from "zustand";
type state = {
listIdCat:Set<string>
addId:(id:string)=>void
}
export const useStoreCart = create<state>((set)=>({
listIdCat:new Set(),
addId:(id)=>{
    set((state)=>{
        const list = new Set([...state.listIdCat,id])
        return {listIdCat: list}
  
     
    })
},

}))