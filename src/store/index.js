import { createStore } from 'vuex'
import { db } from "@/firebase/index";


export default createStore({
	state() {
		return {
			storeBase: [],
			storeBaseKey: [],
			managerBase: [],
			selectedOption: "",
			pages: 0,
			arr: [],
			selectedPage: 1,
			lineNumber: "",
			newComponent: {},
			selectedManager: 0,
			newName: "",
			newAmount: "",
			newPrice:"",
		}
	},
	getters: {
		managerBase(state) {
			return state.managerBase;
		},
		storeBase(state) {
			return state.storeBase;
		},
		storeBaseKey(state) {
			return state.storeBaseKey;
		},
		arr(state) {
			return state.arr;
		},
	},
	mutations: {
		readManagerBase(state, data) {
			// Получаем список менеджеров
			state.managerBase.length = 0;
			let manager = db.ref("managers");
			manager.on("value", (snapshot) => {
			  let Data = snapshot.val();
			  state.managerBase = Data;
			});
			console.log('from store ', state.managerBase);
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
				console.log('from store 2', state.storeBase);
			});
		},
		perPage(state) {
			//пагинация
			state.lineNumber == "" ? (state.lineNumber = 5) : state.lineNumber;
			let startPoint = (state.selectedPage - 1) * +state.lineNumber;
			state.arr = state.storeBase.slice(
				startPoint,
				(startPoint + +state.lineNumber)
			);
			state.pages = Math.ceil(state.storeBase.length / state.lineNumber);
			console.log('from store 3', state.arr);

		},
		getSelection(state) {
			state.lineNumber = state.selectedOption;
		},
		onSelectPage(state, data) {
			state.selectedPage = data.data;
		},
		setToDB (state, data) {
			let faker = require("faker");
			let today = new Date;
			
			state.newName = data.name;
			state.newAmount = data.amount;
			state.newPrice = data.price;
			state.selectedManager = data.selectedManager;

			db.ref().child("components").push({
				  id: 'new',
				  name: state.newName,
				  addDate: today.toString(),
				  amount: state.newAmount,
				  cost: state.newPrice,
				  article: faker.random.number({ min: 100001, max: 999999 }),
				  manager_id: state.selectedManager,
				});
		},
	},
	actions: {
		readManagerBase(context) {
			context.commit('readManagerBase');
		},
		readComponentBase(context) {
			context.commit('readComponentBase');
		},
		perPage(context) {
			context.commit('perPage');
		},
		sendToDB(context, data) {
			context.commit('setToDB', data);
		}
	},
	modules: {
	}
})
