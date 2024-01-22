import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticle } from "./redux/articleSlicer";
const TestArticle = () => {
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const data = useSelector(state => state.article)
    console.log(data)
    useEffect(() => {
        dispatch(fetchArticle())
    }, [])
    const handelInfiniteScroll = async () => {
        // console.log("scrollHeight" + document.documentElement.scrollHeight);
        // console.log("innerHeight" + window.innerHeight);
        // console.log("scrollTop" + document.documentElement.scrollTop);
        try {
            if (
                window.innerHeight + document.documentElement.scrollTop + 1 >=
                document.documentElement.scrollHeight
            ) {
                console.log("scrolled")
                setLoading(true)
                dispatch(fetchArticle())
                // setLoading(true);
                // setPage((prev) => prev + 1);
            }
        } catch (error) {
            console.log(error);
        }
    };
    console.log(data)
    useEffect(() => {
        window.addEventListener("scroll", handelInfiniteScroll);
        return () => window.removeEventListener("scroll", handelInfiniteScroll);
    }, []);
    return <div>
        <div className="article-component" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            {data.data && data.data.map((val, ind) => {
                return <div className="article" style={{ width: "500px", display: "flex", alignItems: "center" }} key={val.id}>

                    <img style={{ width: "200px", height: "300px" }} src={val.image} />
                    <p style={{ marginLeft: "14px" }}> {val.description}</p>
                </div>
            })
            }
        </div>
        {data.isLoading && <div style={{ display: "flex", alignItems: "center" }}>
            <h1 style={{ color: "red" }}>Loading......</h1>
        </div>}

    </div>
}

export default TestArticle;
