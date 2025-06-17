
import { Box } from '@mui/material'
import NavBar from '../components/NavBar/NavBar'
import CodigoVerificacao from '../components/VerificacaoCodigo/VerificacaoCodigo'

const StartingPage = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <NavBar />
                <CodigoVerificacao />
            </Box>
        </>
    )
}

export default StartingPage

