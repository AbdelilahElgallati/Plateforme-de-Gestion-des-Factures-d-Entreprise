import React, { useEffect  } from "react";
import { Box, useTheme, Button } from "@mui/material";
import { useGetAllServicesQuery } from "state/api";
import { useQueryClient } from "react-query"; 
import Header from "components/Header";
import { DataGrid } from "@mui/x-data-grid";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Link } from "react-router-dom";
import FlexBetween from "components/FlexBetween";


const Entreprises = () =>  {
  const theme = useTheme();
  const queryClient = useQueryClient();

  useEffect(() => {
    // Récupérer les données initiales
    const fetchData = async () => {
      await queryClient.invalidateQueries("getAllServices");
    };
    fetchData();
  }, [queryClient]);

  const { data, isLoading } = useGetAllServicesQuery();
  
  // const { data, isLoading } = useGetAllServicesQuery({
  //   refetchOnMount: 'always', 
  //   refetchOnReconnect: true, 
  //   refetchInterval: 10000,
  // });

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 0.7,
    },
    {
      field: "ServiceName",
      headerName: "Service",
      flex: 1,
    },
    
  ];


  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween> 
      <Header title="SERVICES" subtitle="Liste de services" />
      <Link to="/Services/new">
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddOutlinedIcon />}
          sx={{ mt: 3, mb: 2 }} 
        >
          Add
        </Button>
      </Link>
      </FlexBetween>
      
      <Box
        mt="40px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={data || []}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Entreprises;
