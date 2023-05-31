import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { Stack } from '@mui/system';
import apiCustomer from '../../api/customer';

const TransactionMenu = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [quantity, setQuantity] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar que ninguno de los campos esté vacío
    if (email.trim() === '' || quantity.trim() === '') {
      setError(true);
      return;
    }

    try {
        apiCustomer.transferMoney(JSON.parse(localStorage.getItem("userInfo")).id, email, quantity)
    } catch (error) {
        console.error(error)
    }

    
    setEmail('');
    setQuantity('');
    setError(false);
    onClose();
  };

  const inputStyles = {
    color: 'black',
  };

  return (
    <Box
      sx={{
        backgroundColor: '#f0f0f0',
        padding: '20px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={error}
          helperText={error && 'El email es requerido'}
          fullWidth
          sx={{ marginBottom: '10px' }}
          inputProps={{ style: inputStyles }}
        />
        <TextField
          label="Quantity"
          variant="outlined"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          error={error}
          helperText={error && 'La cantidad es requerida'}
          fullWidth
          sx={{ marginBottom: '10px' }}
          inputProps={{ style: inputStyles }}
        />
        <Stack spacing={5} direction='row'>
            <Button type="submit" variant="contained" color="primary" fullWidth>
                Enviar
            </Button>
            <Button variant="contained" color="error" fullWidth onClick={onClose}>
                Cancelar
            </Button>
        </Stack>
        
      </form>
    </Box>
  );
};

export default TransactionMenu;
