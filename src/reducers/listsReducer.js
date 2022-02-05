const initialState = [
    {
        title: "첫번째 Episode",
        id: 0,
        cards: [
            {   
                id: 0,
                text: "텍스트"
            },
            {   
                id: 1,
                text: "텍스트2"
            },
        ]
    },
    {
        title: "두번째 Episode",
        id: 0,
        cards: [
            {   
                id: 0,
                text: "텍스트"
            },
            {   
                id: 1,
                text: "텍스트2"
            },
        ]
    },

]

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        default :
            return state;
    }
}

export default listReducer;