export default function({ getStore, getActions, setStore }) {
    return {
        store: {
            todos: []            
        },
        actions: {
            getToDoList() {
                const store = getStore()
                const endpoint = 'https://assets.breatheco.de/apis/fake/todos/user/kirodriguezke';
                const config = {
                    method: "GET"
                }
                fetch(endpoint, config).then((response) => {
                    return response.json()
                }).then((json) => {
                    setStore({ todos: json})
                    store.todos.map((value, index) => {
                        value["id"] = (Math.floor(Math.random() * 100000) + 1)
                    })
                    setStore()
                })
            },
            setToDoList(data) {
                const store = getStore();
                const endpoint = "https://assets.breatheco.de/apis/fake/todos/user/kirodriguezke";
                const config = {
					method: "PUT",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json"
                    }
                }
                fetch(endpoint, config)
                
            },
            addLabel(item) {
                const store = getStore();
                const newList = [...store.todos]
                newList.push({"label": item, "done": false, "id": (Math.floor(Math.random() * 100000) + 1)})
                setStore({todos: newList})  
            },
            deleteLabel(value) {
                const store = getStore()
                const newList = store.todos.filter((item, index) => {
                    return (value != item.id)
                })
                setStore({ todos: newList})
            }
        }
    }
}