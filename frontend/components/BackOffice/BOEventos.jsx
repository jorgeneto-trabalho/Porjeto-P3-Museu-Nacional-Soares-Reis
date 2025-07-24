import { Box, Button, Modal, TextField, Typography, Autocomplete } from "@mui/material";
import { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';

import dayjs from "dayjs";
import Paper from "@mui/material/Paper";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon   from "@mui/icons-material/Done";
import EditIcon   from "@mui/icons-material/Edit";
import AddIcon from '@mui/icons-material/Add';
import CasinoRoundedIcon from '@mui/icons-material/CasinoRounded';



const BOEventos = () => {
    const handleApagar   = (id) => console.log("Apagar", id);
    const handleTerminar = (id) => console.log("Terminar", id);
    const handleEditar   = (id) => console.log("Editar", id);

    const [nomeEvento, setNomeEvento] = useState('');
    const [data, setData] = useState(dayjs());
    const [open, setOpen] = useState(false);
    const handleOpen  = () => setOpen(true);   // mostra
    const handleClose = () => setOpen(false);  // esconde

    const columns = [
        { field: 'id', headerName: 'ID', flex: 0.1 },
        { field: 'nomeEvento', headerName: 'Evento', flex: 0.4 },
        { field: 'nomeDesafio', headerName: 'Desafio', flex: 0.4 },
        { field: 'nomeEscola', headerName: 'Escola', flex: 0.5 },
        { field: 'data', headerName: 'Data', flex: 0.1 },
        { field: 'codigo', headerName: 'Código', flex: 0.1 },
        {
            field: 'acoes',
            headerName: '',
            flex: 0.3,
            sortable: false,
            filterable: false,
            disableColumnMenu: true,
            renderCell: (params) => (
            <Box 
                sx={{ 
                    display: 'flex', 
                    gap: 0, 
                    justifyContent: "left", 
                    alignItems: "center", 
                    height:"100%",
                    gap: 1
                }}
            >
                <Button 
                    variant="contained"
                    sx={{
                        height:"72%",
                        borderTopLeftRadius: "10px",
                        borderBottomLeftRadius: "10px",
                        backgroundColor: "#ff6600ff",
                        boxShadow: 0
                    }}
                >
                    <EditIcon />
                </Button>
                <Button 
                    variant="contained"
                    sx={{
                        height:"72%",
                        borderTopRightRadius: "10px",
                        borderBottomRightRadius: "10px",
                        boxShadow: 0,
                        gap: 1
                    }}
                >
                    <DoneIcon />Terminar
                </Button>
            </Box>
            ),
        },
    ];

    const rows = [
        { id: 1, nomeEvento: 'Snow', nomeDesafio: 'Jon', nomeEscola: 'Jon', data: '28/07/2025', codigo: '#58476' },
        { id: 2, nomeEvento: 'Lannister', nomeDesafio: 'Cersei', nomeEscola: 'Jon', data: '28/07/2025', codigo: '#58476' },
        { id: 3, nomeEvento: 'Lannister', nomeDesafio: 'Jaime', nomeEscola: 'Jon', data: '28/07/2025', codigo: '#58476' },
        { id: 4, nomeEvento: 'Stark', nomeDesafio: 'Arya', nomeEscola: 'Jon', data: '28/07/2025', codigo: '#58476' },
        { id: 5, nomeEvento: 'Targaryen', nomeDesafio: 'Daenerys', nomeEscola: 'Jon', data: '28/07/2025', codigo: '#58476' },
        { id: 6, nomeEvento: 'Melisandre', nomeDesafio: null, nomeEscola: 'Jon', data: '28/07/2025', codigo: '#58476' },
        { id: 7, nomeEvento: 'Clifford', nomeDesafio: 'Ferrara', nomeEscola: 'Jon', data: '28/07/2025', codigo: '#58476' },
        { id: 8, nomeEvento: 'Frances', nomeDesafio: 'Rossini', nomeEscola: 'Jon', data: '28/07/2025', codigo: '#58476' },
        { id: 9, nomeEvento: 'Roxie', nomeDesafio: 'Harvey', nomeEscola: 'Jon', data: '28/07/2025', codigo: '#58476' },
        { id: 10, nomeEvento: 'Roxie', nomeDesafio: 'Harvey', nomeEscola: 'Jon', data: '28/07/2025', codigo: '#58476' },
        { id: 11, nomeEvento: 'Roxie', nomeDesafio: 'Harvey', nomeEscola: 'Jon', data: '28/07/2025', codigo: '#58476' },
        { id: 12, nomeEvento: 'Roxie', nomeDesafio: 'Harvey', nomeEscola: 'Jon', data: '28/07/2025', codigo: '#58476' },

    ];  

    const paginationModel = { page: 0, pageSize: 5 };

    return(
        <>
            <Box
                sx={{
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <Box 
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 2,
                        borderBottom: 1,
                        borderRadius: "20px",
                        backgroundColor: '#fff',
                        border: "solid 1.5px #c7c6c6ff",
                        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.15)",
                        p: 2,
                        mt: 4,
                        mx: 4
                    }}
                >
                    
                    <Typography 
                        variant="h5"
                        textAlign={"left"}
                        sx={{
                            pl: 6,
                            pr: 6,
                            color: "black",
                            fontWeight: 700
                        }}
                    >
                        Evento
                    </Typography>
                    <Box>
                        <Button 
                            variant="contained"
                            onClick={handleOpen}
                            sx={{
                                p: 1,
                                borderTopLeftRadius: "10px",
                                borderBottomLeftRadius: "10px",
                                mr: 0.5,
                                backgroundColor: "green"
                            }}
                        >
                            <AddIcon />
                        </Button>
                        <Button 
                            variant="contained"
                            sx={{
                                p: 1,
                                borderTopRightRadius: "10px",
                                borderBottomRightRadius: "10px",
                                ml: 0.5,
                                backgroundColor: "red"
                            }}
                        >
                            <DeleteIcon />
                        </Button>
                    </Box>
                </Box>
                <Box
                    sx={{
                        margin: 4,
                        height: "100%",
                        display: "flex",
                        

                    }}
                >
                    <Paper sx={{ height: '100%', width: '100%', boxShadow: 0, borderRadius: "20px"}}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            initialState={{ pagination: { paginationModel } }}
                            pageSizeOptions={[10, 5]}
                            checkboxSelection
                            sx={{ 
                                border: 0,
                                display: "flex",
                                borderRadius: "20px", 
                                border: "solid 1.5px #c7c6c6ff",
                                boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.15)",
                            }}
                        />
                    </Paper>
                </Box>
            </Box>                    
            
            <Modal 
                open={open} 
                onClose={handleClose} 
                sx={{
                    boxShadow: 0,
                    background: "rgba(255, 255, 255, 0.18)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                }}
            >
                <Box
                    sx={{
                    position: 'absolute',
                    width: "60%",
                    height: "60%",
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'white',
                    p: 4,
                    m: 4,
                    gap: 4,
                    borderRadius: "20px",
                    boxShadow: 24,
                    display: 'flex',
                    flexDirection: 'row',
                    minHeight: 0,
                    }}
                >
                    <Box 
                        sx={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            borderRadius: "20px",
                            backgroundColor: '#fff',
                            border: "solid 1.5px #c7c6c6ff",
                            boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.15)",
                            p: 4,
                        }}
                    >
                        <Box sx={{justifyContent: 'top', height: "20%", display: 'flex', flexDirection: "column"}}>
                            <Typography 
                                variant="h5"
                                sx={{
                                    color: "black",
                                    fontWeight: 700,
                                    textAlign: "left",
                                }}
                            >
                                Criar Evento
                            </Typography>
                            <Typography 
                                variant="h7"
                                sx={{
                                    color: "grey",
                                    textAlign: "left",
                                    mb: 6
                                }}
                            >
                                Garanta que todos os campos estão preenchidos
                            </Typography>
                        </Box>
                        <Box sx={{justifyContent: 'top', height: "60%", display: 'flex', flexDirection: "column"}}>
                            
                            <TextField
                                id="nomeEvento"
                                label="Nome do Evento"
                                name="nomeEvento"
                                type="name"
                                value={nomeEvento}
                                onChange={(e) => setNomeEvento(e.target.value)}
                                required
                                sx={{ width: "100%", mb: 2 }}
                            />
                            <Box sx={{display: 'flex', gap: 1.5}}>
                                <Autocomplete
                                    disablePortal
                                    //options={allDesafios}
                                    sx={{ width: "100%", mb: 2 }}
                                    renderInput={(params) => <TextField {...params} label="Desafio" />}
                                />
                                <Button 
                                    variant="contained"
                                    sx={{
                                        borderTopRightRadius: "20px",
                                        borderBottomRightRadius: "20px",
                                        height: (theme) => theme.spacing(7),
                                        backgroundColor: "green",
                                        boxShadow: 0,
                                        p:0
                                    }}
                                >
                                    <AddIcon/>
                                </Button>
                            </Box>
                            <Box sx={{display: 'flex', gap: 1.5}}>
                                <Autocomplete
                                    disablePortal
                                    //options={allEscolas}
                                    sx={{ width: "100%", mb: 2 }}
                                    renderInput={(params) => <TextField {...params} label="Escola" />}
                                />
                                <Button 
                                    variant="contained"
                                    sx={{
                                        borderTopRightRadius: "20px",
                                        borderBottomRightRadius: "20px",
                                        height: (theme) => theme.spacing(7),
                                        backgroundColor: "green",
                                        boxShadow: 0,
                                        p:0
                                    }}
                                >
                                    <AddIcon/>
                                </Button>
                            </Box>
                        </Box>
                        <Box sx={{alignItems: "flex-end", height: "20%", display: 'flex', justifyContent: 'space-between',}}>
                            <Button
                                variant="contained"
                                sx={{
                                    p: 1,
                                    borderRadius: "10px",
                                    backgroundColor: "green",
                                    textTransform: 'none',
                                    width: "15%",
                                    height: "50%",
                                    boxShadow: 0,
                                }}
                            >
                                Criar
                            </Button>
                            <Button
                                variant="contained"
                                sx={{
                                    p: 1,
                                    borderRadius: "10px",
                                    backgroundColor: "red",
                                    textTransform: 'none',
                                    width: "10%",
                                    height: "50%",
                                    boxShadow: 0,
                                }}
                            >
                                <DeleteIcon />
                            </Button>
                        </Box>
                        
                        
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 4,
                            height: "100%"
                        }}
                    >
                        <Box 
                            sx={{
                                flex: 0.8,
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                gap: 2,
                                minHeight: 0,
                                flexDirection: 'column',
                                borderBottom: 1,
                                borderRadius: "20px",
                                backgroundColor: '#fff',
                                border: "solid 1.5px #c7c6c6ff",
                                boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.15)",
                                p: 2,
                            }}
                        >
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateCalendar value={data} onChange={setData} sx={{ color: "black" }} />
                            </LocalizationProvider>
                        </Box>
                        <Box 
                            sx={{
                                flex: 0.2,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: "20px",
                                backgroundColor: '#fff',
                                border: "solid 1.5px #c7c6c6ff",
                                boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.15)",
                                p: 3,
                            }}
                        >
                            <TextField
                                id="codigo"
                                label="Código"
                                name="codigo"
                                type="code"
                                //value={codigo}
                                onChange={(e) => setCodigo(e.target.value)}
                                required
                                sx={{ 
                                    width: "100%", 
                                    '& .MuiOutlinedInput-notchedOutline': { borderRadius: 0, borderTopRightRadius: "10px", borderTopLeftRadius: "10px" },
                                }}
                            />
                            <Button
                                variant="contained"
                                sx={{
                                    p: 1,
                                    borderRadius: "10px",
                                    backgroundColor: "#0b0353ff",
                                    textTransform: 'none',
                                    width: "100%",
                                    borderTopLeftRadius: 0,
                                    borderTopRightRadius: 0,
                                    boxShadow: 0,
                                    border: "solid 1.5px #0b0353ff",
                                }}
                            >
                                <CasinoRoundedIcon />
                            </Button>
                        </Box>
                    </Box>
                    
                </Box>
            </Modal>

        </>
    )
}

export default BOEventos