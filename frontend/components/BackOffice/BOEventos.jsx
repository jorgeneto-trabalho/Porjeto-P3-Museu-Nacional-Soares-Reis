import { Box, Button, Modal, TextField, Typography, Autocomplete } from "@mui/material";
import { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import dayjs from "dayjs";
import Paper from "@mui/material/Paper";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon   from "@mui/icons-material/Done";
import EditIcon   from "@mui/icons-material/Edit";
import AddIcon from '@mui/icons-material/Add';



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
                        borderRadius: 0,
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
                        borderRadius: 0,
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
                                borderRadius: 0,
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
                                borderRadius: 0,
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
                    gap: 3,
                    borderRadius: "20px",
                    boxShadow: 24,
                    display: 'flex',
                    flexDirection: 'row',
                    }}
                >
                    <Box 
                        sx={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: 1,
                            flexDirection: 'column',
                            borderBottom: 1,
                            borderRadius: "20px",
                            backgroundColor: '#fff',
                            border: "solid 1.5px #c7c6c6ff",
                            boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.15)",
                            p: 2,
                        }}
                    >
                        <TextField
                            id="nomeEvento"
                            label="Nome do Evento"
                            name="nomeEvento"
                            type="name"
                            value={nomeEvento}
                            onChange={(e) => setNomeEvento(e.target.value)}
                            required
                            sx={{ mt: 6, width: "100%" }}
                        />
                        <Autocomplete
                            disablePortal
                            //options={allDesafios}
                            sx={{ width: "100%" }}
                            renderInput={(params) => <TextField {...params} label="Desafio" />}
                        />
                        <Autocomplete
                            disablePortal
                            //options={allEscolas}
                            sx={{ width: "100%" }}
                            renderInput={(params) => <TextField {...params} label="Escola" />}
                        />
                    </Box>
                    <Box 
                        sx={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: 2,
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
                            <DatePicker
                                label="Data"
                                value={data}
                                onChange={(newVal) => setData(newVal)}
                            />
                        </LocalizationProvider>
                    </Box>
                </Box>
            </Modal>

        </>
    )
}

export default BOEventos