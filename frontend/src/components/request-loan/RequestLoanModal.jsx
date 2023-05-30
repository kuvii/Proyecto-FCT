import React, { useState } from 'react'
import apiCustomer from '../../api/customer'
import { Box, Button, Paper, TextField } from '@mui/material'

const RequestLoanModal = ({ isOpen, closeModal }) => {
    const [total, setTotal] = useState('')
    const [description, setDescription] = useState('')

    const inputStyles = {
      color: 'black', // Cambia el color del texto aquí
    };

    const handleSubmit = async () => {
        try {
            const user = JSON.parse(localStorage.getItem("userInfo"))
            await apiCustomer.createNewLoan(user.id, {
                total: parseInt(total),
                description: description
            })
            closeModal()
        } catch (error) {
            console.error(error)
        }
    }

    return (
      <div>
          {isOpen && (
              <Box
                  position="fixed"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  bgcolor="rgba(0, 0, 0, 0.5)"
                  zIndex={999}
              >
                  <Paper sx={{ padding: 2 }}>
                      <Box display="flex" flexDirection="column">
                          <Box mb={2}>
                              <TextField
                                  label="Cantidad"
                                  type="number"
                                  value={total}
                                  onChange={(e) => setTotal(e.target.value)}
                                  fullWidth
                                  inputProps={{ style: inputStyles }}
                              />
                          </Box>
                          <Box mb={2}>
                              <TextField
                                  label="Descripción"
                                  value={description}
                                  onChange={(e) => setDescription(e.target.value)}
                                  multiline
                                  rows={4}
                                  fullWidth
                                  inputProps={{ style: inputStyles }}
                              />
                          </Box>
                          <Box display="flex" justifyContent="flex-end">
                              <Button variant="contained" onClick={closeModal} sx={{ mr: 1 }}>
                                  Cancelar
                              </Button>
                              <Button variant="contained" onClick={handleSubmit}>
                                  Enviar
                              </Button>
                          </Box>
                      </Box>
                  </Paper>
              </Box>
          )}
      </div>
    )
}

export default RequestLoanModal