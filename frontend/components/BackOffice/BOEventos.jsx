import { Box, Button, Card, CardActions, Container, FormControl, Grid, Input, InputLabel, List, Modal, TextField, Typography, ListItem, ListItemText, Checkbox, Select, MenuItem, RadioGroup, FormLabel, Radio } from "@mui/material";
import { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon   from "@mui/icons-material/Done";
import EditIcon   from "@mui/icons-material/Edit";
import AddIcon from '@mui/icons-material/Add';


const BOEventos = () => {
    const handleApagar   = (id) => console.log("Apagar", id);
    const handleTerminar = (id) => console.log("Terminar", id);
    const handleEditar   = (id) => console.log("Editar", id);

    const columns = [
        { field: 'id', headerName: 'ID', flex: 0.1 },
        { field: 'nomeEvento', headerName: 'Evento', flex: 0.4 },
        { field: 'nomeDesafio', headerName: 'Desafio', flex: 0.4 },
        { field: 'nomeEscola', headerName: 'Escola', flex: 0.4 },
        { field: 'data', headerName: 'Data', flex: 0.3 },
        { field: 'codigo', headerName: 'Código', flex: 0.3 },
        {
            field: 'acoes',
            headerName: '',
            flex:0.4,
            sortable: false,
            filterable: false,
            disableColumnMenu: true,
            renderCell: (params) => (
            <Box 
                sx={{ 
                    display: 'flex', 
                    gap: 1, 
                    justifyContent: "left", 
                    alignItems: "center", 
                    height:"100%" 
                }}
            >
                <Button 
                    variant="contained"
                    sx={{
                        borderRadius: 0,
                        borderTopLeftRadius: "10px",
                        borderBottomLeftRadius: "10px",
                        backgroundColor: "#ff6600ff",
                    }}
                >
                    <EditIcon />
                </Button>
                <Button 
                    variant="contained"
                    sx={{
                        borderRadius: 0,
                        borderTopRightRadius: "10px",
                        borderBottomRightRadius: "10px",
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
                        display: 'flex',            // <- activa layout flex
                        flexDirection: 'row',       // <- garante “em linha”
                        alignItems: 'center',       // <- centra verticalmente
                        justifyContent: 'space-between', // opcional: espaço entre título e botão
                        gap: 2,                     // opcional: distância se tiveres + itens
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
                                display: "flex",
                                borderRadius: "20px", 
                                border: "solid 1.5px #c7c6c6ff",
                                boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.15)",
                            }}
                        />
                    </Paper>
                </Box>
            </Box>                    
            
        </>
    )
}

export default BOEventos