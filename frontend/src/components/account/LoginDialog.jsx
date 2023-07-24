import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import { qrCodeImage } from "../../utils/data";

const Component = styled(Box)`
  display: flex;
`;

const Container = styled(Box)`
  padding: 56px 0 56px 56px;
`;

const QRCode = styled("img")({
  height: 264,
  width: 264,
  margin: "50px 0 0 50px",
});

const Title = styled(Typography)`
  font-size: 26px;
  color: #525252;
  font-weight: 300;
  font-family: inherit;
  margin-botton: 25px;
`;

const StyledList = styled(List)`
  & > li {
    padding: 0;
    margin-top: 15px;
    font-size: 18px;
    line-height: 28px;
  }
`;

const dialogStyle = {
  height: "96%",
  marginTop: "12%",
  width: "60%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "none",
};

const LoginDialog = () => {
  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyle }}>
      <Component>
        <Container>
          <Typography>To use Whatsapp on your computer:</Typography>
          <List>
            <ListItem>1. Open WhatsApp on your phone</ListItem>
            <ListItem>2. Tap Menu Setting and select Whatsapp Web</ListItem>
            <ListItem>
              3. Point your phone to this screen to capture the code
            </ListItem>
            <ListItem>Open WhatsApp on your phone</ListItem>
          </List>
        </Container>
        <Container>
          <QRCode src={qrCodeImage} alt="qr code" />
        </Container>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
