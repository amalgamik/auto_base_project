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
			console.log('from getters state.managerBase', state.managerBase);
			return state.managerBase;
		},
		storeBase(state) {
			console.log('from getters state.storeBase', state.storeBase);
			return state.storeBase;
		},
		storeBaseKey(state) {
			console.log('from getters storeBaseKey', state.storeBaseKey);
			return state.storeBaseKey;
		},
		arr(state) {
			return state.arr;
		},
		lineNumber(state) {
			return state.lineNumber;
		},
		selectedPage(state) {
			return state.selectedPage;
		},
		pages(state) {
			return state.pages;
		},
	},
	mutations: {
		readComponentBase(state) {

			let storeDB = [];
			let storeDBKey = [];
			let ManDB = [];
			let components = db.ref();
			components.child('components').on("value", (snapshot) => {
				storeDB.length = 0;
				storeDBKey.length = 0;
				snapshot.forEach((childSnapshot) => {
					let childData = childSnapshot.val();
					storeDBKey.push(childSnapshot.key);
					storeDB.push(childData);
				});
			});
			components.child('managers').once("value", (snapshot) => {
				ManDB.length = 0;
				snapshot.forEach((childSnapshot) => {
					let childData = childSnapshot.val();
					ManDB.push(childData);
				});
			});
			components.off();
			console.log('from readComponentBase ', ManDB, storeDBKey, storeDB);

			state.storeBase = storeDB;
			state.storeBaseKey = storeDBKey;
			state.managerBase = ManDB;
			
		},
		perPage(state) {
			//пагинация
			state.lineNumber == "" ? (state.lineNumber = 5) : state.lineNumber;
			(state.selectedPage == 0) ? (state.selectedPage = 1) : state.selectedPage;
			let startPoint = (state.selectedPage - 1) * +state.lineNumber;
			console.log('33333',state.storeBase, typeof(state.storeBase));
			console.log('333444',state.managerBase, typeof(state.managerBase));
			let arr = state.storeBase.slice(
				startPoint,
				(startPoint + +state.lineNumber)
			);
			let pages = Math.ceil(state.storeBase.length / state.lineNumber);
			console.log('from perPage', arr);

			state.arr = arr;
			state.pages = pages;

		},
		getSelection(state, data) {
			console.log(data);
			state.lineNumber = data;
		},
		onSelectPage(state, data) {
			console.log(data);
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
		deleteFromDB (state, data) {
			console.log('11111', data);
			let removed = db.ref('components');
			state.arr.splice(data.index, 1);
			removed.child(data.key).remove();

		}
	},
	actions: {
		// async readManagerBase(context) {
		// 	let ManDB = [];
		// 	let manager = db.ref("managers");
		// 		await manager.on("value", (snapshot) => {
		// 			ManDB.length = 0;
		// 			snapshot.forEach((childSnapshot) => {
		// 				let childData = childSnapshot.val();
		// 				ManDB.push(childData);
		// 			});
		// 		});
		// 	console.log('from readManagerBase ', ManDB)
		// 	context.commit('readManagerBase', ManDB);
		// },
		// async readComponentBase(context) {
		// 	let storeDB = [];
		// 	let storeDBKey = [];
		// 	let ManDB = [];
		// 	let components = db.ref();
		// 	await components.child('components').once("value", (snapshot) => {
		// 		storeDB.length = 0;
		// 		storeDBKey.length = 0;
		// 		snapshot.forEach((childSnapshot) => {
		// 			let childData = childSnapshot.val();
		// 			storeDBKey.push(childSnapshot.key);
		// 			storeDB.push(childData);
		// 		});
		// 	});
		// 	await components.child('managers').once("value", (snapshot) => {
		// 		ManDB.length = 0;
		// 		snapshot.forEach((childSnapshot) => {
		// 			let childData = childSnapshot.val();
		// 			ManDB.push(childData);
		// 		});
		// 	});
		// 	components.off();
		// 	console.log('from readComponentBase ', ManDB, storeDBKey, storeDB);

		// 	context.commit('readComponentBase', {storeDB: storeDB, storeDBKey: storeDBKey, ManDB:ManDB});
		// },
		// perPage(context, data) { 
		// 	console.log('00000',data);
		// 	state.lineNumber == "" ? (state.lineNumber = 5) : state.lineNumber;
		// 	(state.selectedPage == 0) ? (state.selectedPage = 1) : state.selectedPage;
		// 	let startPoint = (state.selectedPage - 1) * +state.lineNumber;
		// 	console.log('33333',data.storeBase, typeof(data.storeBase));
		// 	console.log('333444',data.managerBase, typeof(data.managerBase));
		// 	let arr = state.storeBase.slice(
		// 		startPoint,
		// 		(startPoint + +state.lineNumber)
		// 	);
		// 	let pages = Math.ceil(state.storeBase.length / state.lineNumber);
		// 	console.log('from perPage', arr);

		// 	context.commit('perPage', {arr: arr, pages: pages});
		// },
		sendToDB(context, data) {
			context.commit('setToDB', data);
		},
		deleteFromDB (context, data) {
			context.commit('deleteFromDB', data);
		}
	},
	modules: {
	}
})
