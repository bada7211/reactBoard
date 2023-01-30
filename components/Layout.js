import { Header as Head } from "./Header";
import { Nav } from "./Nav";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container } from "@mui/system";
import { useState  } from "react"
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Layout({children}){
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleDelete = () => {
        setOpen(false);
        router.push(`/delete/${router.query.id}`);
    };

    let contextUI = null;
    if(router.query.id){
        contextUI = <>
        <Button variant="outlined" color="success" component={Link} href={`/update/${router.query.id}`}>Update</Button>
        <Button variant="outlined" color="error" onClick={handleClickOpen}>Delete</Button>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
        <DialogTitle id="alert-dialog-title">
          {"삭제하시겠습니까?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           삭제된 게시물은 복구할 수 없습니다.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>취소</Button>
          <Button onClick={handleDelete} autoFocus>
            삭제
          </Button>
        </DialogActions>
        </Dialog>
        </>
    }
    return <>
    <Container maxWidth="sm">
        <Head title="Payletter"></Head>
        <Grid container>
            <Grid item md={3} xs={12}>
                <Nav></Nav>
            </Grid>
            <Grid item md={9} xs={12}>
                <p>
                    {children}
                </p>
                <Stack spacing={1} direction="row">
                    <Button variant="contained" color="success" component={Link} href="/create">Create</Button>
                    {contextUI}
                </Stack>
            </Grid>
        </Grid>
    </Container>
    </>
}
    