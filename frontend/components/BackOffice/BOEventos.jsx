import { Box, Button, Card, CardActions, Container, FormControl, Grid, Input, InputLabel, List, Modal, TextField, Typography, ListItem, ListItemText, Checkbox, Select, MenuItem, RadioGroup, FormLabel, Radio } from "@mui/material";
import { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon   from "@mui/icons-material/Done";
import EditIcon   from "@mui/icons-material/Edit";


const BOEventos = () => {
    const handleApagar   = (id) => console.log("Apagar", id);
    const handleTerminar = (id) => console.log("Terminar", id);
    const handleEditar   = (id) => console.log("Editar", id);

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'nomeEvento', headerName: 'Evento', width: 300 },
        { field: 'nomeDesafio', headerName: 'Desafio', width: 300 },
        { field: 'nomeEscola', headerName: 'Escola', width: 400 },
        { field: 'data', headerName: 'Data', width: 150 },
        { field: 'codigo', headerName: 'Código', width: 120 },
        {
            field: 'acoes',
            headerName: 'Ações',
            width: 500,
            sortable: false,
            filterable: false,
            disableColumnMenu: true,
            renderCell: (params) => (
            <Box sx={{ display: 'flex', gap: 1 }}>
                <Button
                size="small"
                color="error"
                variant="outlined"
                startIcon={<DeleteIcon />}
                onClick={() => handleApagar(params.row.id)}
                sx={{minWidth: 100, minHeight: 35, mt: 1}}
                >
                Apagar
                </Button>

                <Button
                size="small"
                color="success"
                variant="outlined"
                startIcon={<DoneIcon />}
                onClick={() => handleTerminar(params.row.id)}
                sx={{minWidth: 110, minHeight: 35, mt: 1}}
                >
                Terminar
                </Button>

                <Button
                size="small"
                variant="outlined"
                startIcon={<EditIcon />}
                onClick={() => handleEditar(params.row.id)}
                sx={{minWidth: 110, minHeight: 35, mt: 1}}
                >
                Editar
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
                        borderBottom: 1, 
                        backgroundColor: '#0f7e8dff',
                        p: 3
                    }}
                >
                    <Typography 
                        variant="h5"
                        textAlign={"left"}
                        sx={{
                            pl: 6,
                            pr: 6
                        }}
                    >
                        Evento - Event
                    </Typography>
                </Box>
                <Box
                    sx={{
                        height: "100%",
                        display: "flex"
                    }}
                >
                    <Paper sx={{ height: '100%', width: '100%' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            initialState={{ pagination: { paginationModel } }}
                            pageSizeOptions={[5, 10]}
                            checkboxSelection
                            sx={{ 
                                border: 0,
                                display: "flex"
                            }}
                        />
                    </Paper>
                </Box>
            </Box>                    
            
        </>
    )
}

export default BOEventos