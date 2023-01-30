import { Article } from "@/components/Article"
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export async function getServerSideProps(context) {
    const id = context.params.id;
    const result = await axios.delete(process.env.NEXT_PUBLIC_API_URL+'topics/' + id);
    
    return {
        props: {},
    }
}
export default function Delete(){
    const route = useRouter();
    route.push(`/`);
    return <></>
}