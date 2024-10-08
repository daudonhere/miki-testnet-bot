import Head from "next/head";
import { Inter } from "next/font/google";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  TextField,
  Avatar,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Container,
  Box,
  BottomNavigation,
  BottomNavigationAction
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ContactsIcon from "@mui/icons-material/Contacts";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [value, setValue] = useState(0);

  const contacts = [
    { name: "Ahmad Ismail", email: "ahmad.ismail@gmail.com", avatarUrl: "/avatar1.png" },
    { name: "Sara Ibrahim", email: "sara.ibrahim@yahoo.com", avatarUrl: "/avatar2.png" },
    { name: "Ahmad Ibrahim", email: "ahmad_ibrahim@gmail.com", avatarUrl: "" }, // No avatar
    { name: "Reem Khaled", email: "reem_Khaled@yahoo.com", avatarUrl: "/avatar3.png" },
    { name: "Hiba Saleh", email: "hiba_1993@gmail.com", avatarUrl: "/avatar4.png" },
    { name: "Sahar Fawzi", email: "fawzi.sahar@yahoo.com", avatarUrl: "/avatar5.png" },
    { name: "Nisreen Ismail", email: "nisreen_5472@gmail.com", avatarUrl: "/avatar6.png" },
    { name: "Yara Khalil", email: "yara_khalil@hotmail.com", avatarUrl: "" } // No avatar
  ];

  return (
    <>
      <Head>
        <title>Miki Bot</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className} style={{ backgroundColor: "#ffffff", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <AppBar position="sticky" elevation={0} sx={{ minHeight: "8vh", backgroundColor: "#ffffff", color: "#000" }}>
          <Toolbar sx={{ padding: "0 16px" }}>
            <Typography variant="h6" sx={{ fontSize: "22px", marginLeft: "8vw", textAlign: "center", fontWeight: 'bold', flexGrow: 1 }}>
              Contacts
            </Typography>
            <IconButton color="inherit" aria-label="add contact">
              <AddIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Container maxWidth="sm" sx={{ flex: "1 0 auto" }}>
          <Box my={1} px={1}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Enter a name"
              InputProps={{
                startAdornment: <SearchIcon />,
              }}
              sx={{ my: 2, backgroundColor: "#fff", borderRadius: "12px" }}
            />
            <List>
              {contacts.map((contact, index) => (
                <ListItem
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                    mb: 1,
                    padding: "8px 16px",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <ListItemAvatar>
                      {contact.avatarUrl ? (
                        <Avatar src={contact.avatarUrl} />
                      ) : (
                        <Avatar>{contact.name.charAt(0)}</Avatar>
                      )}
                    </ListItemAvatar>
                    <ListItemText primary={contact.name} secondary={contact.email} />
                  </Box>
                  <Box>
                    <Button
                      variant="contained"
                      sx={{
                        minWidth: "40px",
                        minHeight: "40px",
                        mr: 1,
                        bgcolor: "#fbbd08",
                        color: "#000",
                        padding: 0,
                      }}
                    >
                      <ArrowDropUpIcon />
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        minWidth: "40px",
                        minHeight: "40px",
                        bgcolor: "#2185d0",
                        color: "#fff",
                        padding: 0,
                      }}
                    >
                      <ArrowDropDownIcon />
                    </Button>
                  </Box>
                </ListItem>
              ))}
            </List>
          </Box>
        </Container>

        {/* Bottom Navigation */}
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            borderTop: "1px solid #e0e0e0",
            backgroundColor: "#ffffff"
          }}
        >
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="Transactions" icon={<SyncAltIcon />} />
          <BottomNavigationAction label="Contacts" icon={<ContactsIcon />} />
          <BottomNavigationAction label="Profile" icon={<AccountCircleIcon />} />
        </BottomNavigation>
      </main>
    </>
  );
}