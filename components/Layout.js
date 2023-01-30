import { Header as Head } from "./Header";
import { Nav } from "./Nav";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container } from "@mui/system";
import Grid from '@mui/material/Grid';

export default function Layout({children}){
    const router = useRouter();
    let contextUI = null;
    if(router.query.id){
        contextUI = <>
        <Link href={`/update/${router.query.id}`}>Update</Link>
        <Link href={`/delete/${router.query.id}`}>Delete</Link>
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
                {children}
                <Link href="/create">Create</Link>
                {contextUI}
            </Grid>
        </Grid>
    </Container>
    </>
}
    