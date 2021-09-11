
// Con la prop children invocamos titulo para componentes tipo caja de texto sin necesidad de envarala

const Title=({children})=>{
    return(
        <h1>
            {children}

            <style jsx>

                {`
                    h1{
                        margin: 0;
                        font-size; 3rem;
                        tex-align: center;
                    }
                `}
            </style>
        </h1>
    )
}

export  default Title;