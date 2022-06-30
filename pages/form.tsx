import Head from "next/head";
import NextLink from "next/link";
import {
  AppBar,
  Box,
  Button,
  CircularProgress,
  Container,
  MenuItem,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useGetFormQuery, useSubmitFormMutation } from "@Redux/Modules/Form";
import { useState } from "react";

const Register = () => {
  const [fields, setFields] = useState({});
  const { isLoading, data } = useGetFormQuery({});
  console.log("useGetFormQuery", isLoading, data);
  const [
    updateForm, // This is the mutation trigger
    { isLoading: isUpdating }, // This is the destructured mutation result
  ] = useSubmitFormMutation();
  console.log("useSubmitFormMutation", isUpdating, fields);

  const camelCaseToTitleCase = (text: string) => {
    const result = text.replace(/([A-Z])/g, " $1");
    const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return finalResult;
  };
  const onSubmit = event => {
    event.preventDefault();
    updateForm(fields);
  };
  return (
    <>
      <Head>
        <title>Dynamic Form</title>
      </Head>
      <Box
        component="main"
        sx={{
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "100%",
        }}
      >
        <Container maxWidth="sm">
          <AppBar>
            <Toolbar></Toolbar>
          </AppBar>

          <form onSubmit={onSubmit}>
            <Box sx={{ my: 3, paddingTop: 8 }}>
              <Typography color="textPrimary" variant="h4">
                Dynamic Form
              </Typography>
            </Box>
            {isLoading ? (
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <CircularProgress />
              </Box>
            ) : (
              data?.data.map(e => {
                const type: any = { [e.type]: true };
                if (e.type === "multiline") {
                  type.rows = 4;
                }
                fields[e.fieldName] = fields[e.fieldName] || e.value;
                return (
                  <TextField
                    {...type}
                    fullWidth
                    label={camelCaseToTitleCase(e.fieldName)}
                    margin="normal"
                    name={e.fieldName}
                    value={fields[e.fieldName]}
                    onChange={event => {
                      setFields({
                        ...fields,
                        [e.fieldName]: event.target.value,
                      });
                    }}
                    variant="outlined"
                  >
                    {e.options?.map(option => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                );
              })
            )}
            <Box sx={{ pt: 2 }}>
              <Button
                color="primary"
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Submit
              </Button>
            </Box>
            <Box sx={{ py: 2 }}>
              <NextLink href="/" passHref>
                <Button
                  color="primary"
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  component="a"
                  startIcon={<ArrowBackIcon fontSize="small" />}
                >
                  Go Back
                </Button>
              </NextLink>
            </Box>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Register;
