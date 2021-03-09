import { createStore } from 'vuex'
import { db } from "@/firebase/index";


export default createStore({
  state () {
	return {
	  storeBase: [],
	  storeBaseKey: [],
      managerBase: [],
      selectedOption: "",
      pages: 0,
      arr: [],
      selectedPage: 1,
      lineNumber: "",
	}
  },
  mutations: {
	readManagerBase(state) {
		//Получаем список менеджеров
		state.managerBase.length = 0;
		let manager = db.ref("managers");
		manager.on("value", (snapshot) => {
		  let Data = snapshot.val();
		  state.managerBase = Data;
		});
	  },
	  readComponentBase(state) {
		//Получаем список деталей
		state.storeBase.length = 0;
		let components = db.ref("components");
		components.on("value", (snapshot) => {
		  snapshot.forEach((childSnapshot) => {
			let childData = childSnapshot.val();
			state.storeBaseKey.push(childSnapshot.key);
			state.storeBase.push(childData);
		  });
		});

	  },
	  perPage(state) {
		//пагинация
		state.lineNumber == "" ? (state.lineNumber = 5) : state.lineNumber;
		let startPoint = (state.selectedPage - 1 ) * +state.lineNumber;
		state.arr = state.storeBase.slice(
		  startPoint,
		  (startPoint + +state.lineNumber)
		);
		state.pages = Math.ceil(state.storeBase.length / state.lineNumber);
	  },
	  getSelection(state) {
		state.lineNumber = state.selectedOption;
	  },
	  onSelectPage(state, data) {
		state.selectedPage = data.data;
	  },
  },
  actions: {
  },
  modules: {
  }
})
