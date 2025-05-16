
import { Box } from '@mui/material'
import InserirNome from '../components/inserir-nome'

const NamingRoom = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <InserirNome />
            </Box>
        </>
    )
}

export default NamingRoom