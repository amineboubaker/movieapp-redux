import { COLORIZE } from "../types";

const initialState = {
    starArray :[
        {
            id:1,isColored:false,star:"★"
         },
         {
            id:2,isColored:false,star:"★"
         },
         {
            id:3,isColored:false,star:"★"
         },
         {
            id:4,isColored:false,star:"★"
         },
         {
            id:5,isColored:false,star:"★"
         },
    ]

}

const starReducer= (state = initialState, { type, payload }) => {
if (type === COLORIZE) {
    return{
        ...state,starArray:state.starArray.map(star => star.id === payload ?{...star,isColored:!star.isColored} : star
            ),
    };
}
else return state;
};
export default starReducer ;
