
import { Box } from '@mui/material'
import InserirNome from '../components/InserirNome/InserirNome'

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