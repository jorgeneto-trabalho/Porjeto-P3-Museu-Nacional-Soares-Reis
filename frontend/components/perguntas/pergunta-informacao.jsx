
import { Box, Button, Container, FormControl, InputLabel, TextField } from '@mui/material'

const PerguntaLayout = () => {
    return (
        <>
            <FormControl>
                <TextField>Quem é o autor da obra "Peixeiras na praia"</TextField>
                <InputLabel>Pergunta 1</InputLabel>              
                <Container>
                    <Box sx={{ display: "flex", flexDirection: 'row' }}>
                        <Box sx={{ display: "flex", flexDirection: 'column' }}>
                            <Button>Resposta errada</Button>
                            <Button>Resposta errada</Button>
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: 'column' }}>
                            <Button>Lino António</Button>
                            <Button>Resposta errada</Button>
                        </Box>
                    </Box>
                </Container>
            </FormControl>
        </>
    )
}

export default PerguntaLayout