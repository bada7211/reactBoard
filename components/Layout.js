import { Header as Head } from "./Header";
import { Nav } from "./Nav";
import Link from "next/link";
import { useRouter } from "next/router";

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
        <Head title="Payletter"></Head>
        <Nav></Nav>
        {children}
        <Link href="/create">Create</Link>
        {contextUI}
    </>
}
    