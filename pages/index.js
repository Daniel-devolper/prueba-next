import Layout from '../components/layaout'
import Title from '../components/title'


export default function Home(){
    return(
        <Layout>
            
            <Title>Home page</Title> {/**Componente tipo caja al que se le envia el titulo por medio de children */}
            <p>Aprendamos Nextjs con WebTor</p>
            
            <style jsx>
                {`
                    p{
                        color: darkgray; 
                    }

                    p:hover{
                        color: darkred;
                    }
                
                `}
            </style>
        </Layout>
    )

}