import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useAppStore = defineStore({
  id: "useAppStore",
  state: ()=>({
    menubar: false,
    name:"sdf",
    addEducation: false,
    workExperience: false
  }),
  actions:{
    setMenubar() {
      this.menubar = !this.menubar
    },
    setAddEducation(){
      // this.addEducation = true
      alert("sadvf")
    },
    // setAddWorkExperience(){
    //   this.workExperience = true
    // }
  }
})



