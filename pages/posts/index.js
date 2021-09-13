import Layout from "../../components/layaout";
import Title from "../../components/title";
import Link from 'next/link'

const Posts = ({ posts }) => {

    return (
        <Layout>
            <Title>Posts</Title>
            <ul>
                {
                    posts.map((post) => <Link
                        href={`/posts/${post.id}`} key={post.id}>
                            <a> {post.title} - {post.body}
                            </a>
                    </Link>)
                }
            </ul>
        </Layout>
    )
}


// Se renderiza estaticamente
export async function getStaticProps() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await res.json();
    return {
        props: {
            posts: data
        }
    }
}


export default Posts;