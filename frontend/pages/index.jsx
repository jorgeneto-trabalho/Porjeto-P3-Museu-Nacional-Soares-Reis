
import { Box } from '@mui/material'
import NavBar from '../components/navbar/index'
import CodigoVerificacao from '../components/verificacao-codigo'

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

