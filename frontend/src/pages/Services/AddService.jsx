import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import Header from "components/Header";
import { useAddServiceMutation } from "state/api";
import { useNavigate } from "react-router-dom";
const AddService = () => {
  const [serviceName, setServiceName] = useState("");
  const [addService] = useAddServiceMutation();
  const Navigate = useNavigate();

  const handleChange = (e) => {
    setServiceName(e.target.value); 
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("Service Name:", serviceName);
      await addService({ ServiceName: serviceName });
      Navigate("/Services");
    } catch (error) {
      console.log(error);
    }
    
  };

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="ADD SERVICES" subtitle="Ajoute d'une nouvelle service" />
      <form onSubmit={handleSubmit}>
        <TextField
          label="Service Name"
          value={serviceName.ServiceName}
          name="ServiceName"
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <Box mt={2}>
          <Button type="submit" variant="contained" color="primary">
            Add Service
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default AddService;
