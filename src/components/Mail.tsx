import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { ChangeEvent, useState } from "react";
import { SiGithub, SiInstagram } from "react-icons/si";

const email = { user: "caden.koj", domain: "gmail.com" };

function Mail() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [mailTo, setMailTo] = useState("");

  const handleSubjectChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSubject(event.target.value);
    updateMailTo();
  };

  const handleMessageChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
    updateMailTo();
  };

  const updateMailTo = () => {
    const mailtoLink = `mailto:${email.user}@${email.domain}?subject=${subject}&body=${message}`;
    setMailTo(mailtoLink);
  };

  return (
    <Card>
      <CardContent
        component="form"
        sx={{ "& .MuiTextField-root": { my: 1 } }}
        autoComplete="off"
        noValidate
      >
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Typography variant="h6" gutterBottom>
                Get In Touch
              </Typography>
              <Typography gutterBottom>
                Have a project idea? I'd love to hear about it!
              </Typography>
            </div>
            <Stack spacing={1} direction="row">
              <IconButton
                href="https://instagram.com/caden.koj/"
                target="_blank"
              >
                <SiInstagram />
              </IconButton>
              <IconButton
                href="https://github.com/KojiOdyssey/"
                target="_blank"
              >
                <SiGithub />
              </IconButton>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Subject"
              placeholder="Project Idea"
              size="small"
              onChange={handleSubjectChange}
              fullWidth
            />
            <TextField
              label="Message"
              multiline
              rows={3}
              placeholder="Hey! Here's what I'm thinking..."
              size="small"
              onChange={handleMessageChange}
              fullWidth
            />
            <Button href={mailTo} variant="contained" fullWidth>
              Send
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Mail;
