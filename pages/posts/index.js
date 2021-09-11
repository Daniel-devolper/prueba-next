import { useEffect, useState } from "react";
import Layout from "../../components/layaout";
import Title from "../../components/title";
import Link from 'next/link'
// import fecth from 'isomorphic-fetch';

const Posts=({posts})=>{
    
    // CLIENT SIDE RENDERING
    // const [posts, setPosts] = useState([])

    // useEffect(()=>{
    //     const fetchPost=async()=>{
    //         const res= await fetch(`https://jsonplaceholder.typicode.com/posts`);
    //         const newPost= await res.json();
    //         setPosts(newPost); //se envia cada post recivido de la Api;
    //     }

    //     fetchPost();
    // },[])

    return(
        <Layout>
            <Title>Post</Title>
            {console.log(posts)}
            <ul>
            {
                posts.map((post)=>{
                    return(
                        <>
                        <li key={post.id}>
                        <Link href={`/posts/${post.id}`} > {/*Ruta dinmica con archivo */}
                            <a>
                                <h3>{post.title}</h3>
                                <p>{post.body}</p>
                            </a> 
                        </Link>

                        

                        </li>
                        </>
                    )
                })
            }
            </ul>
        </Layout>
    )
}


// Se renderiza del lado del servidor
export async function getStaticProps(){
    const res= await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data= await res.json();
    console.log(data)
    return{
        props:{
            posts: data
        }
    }
}


export default Posts;