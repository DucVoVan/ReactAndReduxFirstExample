const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            // debugger;
            // state.forEach(function (st) {
            //     console.log(st.text);
            // })



            return state.map(todo =>
                todo.id === action.id ? {...todo, completed: !todo.completed} : todo
            )
        default:
            return state
    }
}

export default todos
