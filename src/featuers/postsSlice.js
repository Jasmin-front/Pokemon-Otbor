import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'
const initialState = {
    pokemon:[]
}

export const fetchData = createAsyncThunk(
    'fetchData',
    async function(info,{dispatch, rejectWithValue}){
        const response = await fetch(baseUrl)
        const responseData = await response.json()
        const detailPokemon = responseData.results.map( async (item) => {
            const response = await fetch(item.url)
            const responseData = await response.json()
            return responseData
        })
        const newDetailPokemon  = await Promise.all(detailPokemon)
        dispatch(postsInfo(newDetailPokemon))
    }
)
const postsSlice = createSlice({
    name:'postSlice',
    initialState,
    reducers:{
        postsInfo:(state, action) => {
            state.pokemon = action.payload
        }
    }
})
export const {postsInfo} = postsSlice.actions
export default postsSlice.reducer