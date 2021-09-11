import { useRouter } from "next/router";
import Layout from "../../components/layaout";
import Title from "../../components/title";


const PostDetail=()=>{

    const router= useRouter();
    const {id} =router.query

    return(
        <Layout>
            <Title>Post Details</Title>
            <p>Post ID: {id}</p>
        </Layout>
    )
}

export default PostDetail;