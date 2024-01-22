import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchArticle = createAsyncThunk("fetchArticle", async () => {
    const data = await fetch('https://fakestoreapi.com/products')//('https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/1')
    return data.json()
})
const articleSlicer = createSlice({
    name: "article",
    initialState: {
        isLoading: false,
        data:
            // [{
            //     category
            //         :
            //         "men's clothing",
            //     description
            //         :
            //         "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
            //     id
            //         :
            //         21,
            //     image
            //         :
            //         "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
            //     price
            //         :
            //         55.99,
            //     error: false
            // }]
            null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchArticle.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(fetchArticle.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = state.data ? [...state.data, ...action.payload] : action.payload
        })
        builder.addCase(fetchArticle.rejected, (state, action) => {
            state.error = true;
        })
    }
})

export default articleSlicer.reducer;
