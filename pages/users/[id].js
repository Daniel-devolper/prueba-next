import {useRouter} from 'next/router'
import Layout from '../../components/layaout';
import Title from '../../components/title';

const UserDetails=()=>{

    const router= useRouter();//para tener acceso a la variable que va a recibir [nombre].js
    
    const {id} = router.query //Des-estructuramos y obtenemos la var enviada por la  ruta dinamicas

    return(
        <Layout>
            <Title>User Details</Title>
            <p>User ID: {id} </p>
        </Layout>
    )
}

export default UserDetails;