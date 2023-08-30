import { atom } from "recoil";
export const contentState = atom({
  key:"contentState",
  default: {
    isLoading:true,
    content:null
  }
})