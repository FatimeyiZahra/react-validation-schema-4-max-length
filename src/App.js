import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  CircularProgress,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/system";
import {
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const App = () => {
  const [open, setOpen] = useState(false);
  const [warning, setWarning] = useState();
  console.log("warning", warning);
  const getInput = (e) => {
    const { maxLength, value} = e.target;
    console.log(value.length);
    if (parseInt(value.length)) {
      if (parseInt(value.length) >= maxLength - 20) {
        setWarning(maxLength - parseInt(value.length));
      }
    }
  };
  function CircularProgressWithLabel(props) {
    return (
      <> 
      {/* <Typography >last</Typography> */}
       <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress variant="determinate" {...props} color="warning"  size="1.5rem"/>
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="caption" component="div" color="text.secondary" style={{fontSize:"10px"}}>
            {`${warning ? warning : ""}  `}
          </Typography>
        </Box>
      </Box>
      {/* <Typography > words</Typography> */}
      </>
     
    );
  }

  CircularProgressWithLabel.propTypes = {
  
    value: PropTypes.number.isRequired,
  };

  return (
    <>
      <Tooltip
        title="Add"
        onClick={(e) => setOpen(true)}
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(90%)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500} variant="span">
              John Doe
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            inputProps={{ maxLength: 50 }}
            placeholder="What's on your mind?"
            variant="standard"
            onChange={getInput}
          />
          {warning ? (
            <CircularProgressWithLabel value={100 - warning} />
          ) : (
            <Typography style={{color:"red"}}>reached the maximum value</Typography>
          )}

          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default App;
