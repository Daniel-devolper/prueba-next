import Link from 'next/link';

const Navbar=()=>{

    return(
        <nav>
            <Link href="/" >
                <a>Home</a>
            </Link>
            
            <Link href="/users">
                <a>Users</a>
            </Link>
            
            <Link href="/posts">
                <a>Post</a>
            </Link>

            {/* <Link href='/posts/[id]' as={`/posts/${2}`}> {/*esto es para las rutas dinamicas [] */}
                {/* <a>PoFor ID</a>
            </Link> */} 

            <style jsx>
                {`
                    nav{
                        padding-top: 10px;

                    }

                    a{
                        padding: 0 10px;
                    }
                `}

            </style>
        </nav>
    )
}

export default Navbar;