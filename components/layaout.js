import Navbar from "./navbar"

const Layout=({children})=>{

    return(
        <div>
            <Navbar/>
            <main>
                {children}
            </main>

            <style jsx>
                {`
                    div{
                        min-height: 100vh;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items; center;
                    }

                    main{
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                `}
            </style>

            {/* <style jsx global> {/*con la prop JSX se a un solo archivo JSX + GLOBAL  se aplica a todos los documentso */}
                {/* {`
                    html, body{
                        padding: 0;
                        margin: 0;
                    }

                    *{
                        box-sizing: border-box;
                    }

                
                `}
            </style> */} 
        </div>
    )
}

export default Layout;