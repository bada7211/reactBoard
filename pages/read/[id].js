import { useRouter } from "next/router";
import axios from 'axios';
import { Article } from "@/components/Article";

export async function getServerSideProps(context) {
    const id = context.params.id;
    const result = await axios.get(process.env.NEXT_PUBLIC_API_URL+'topics/' + id);
    
    return {
        props: {topic:result.data},
    }
}
// NOTE getServerSideProps 쓰면 id값 처음부터 그냥 생성됨

export default function Read({topic}) {
    const router = useRouter()
    // console.log(router.query.id);
    // NOTE ctrl + alt + l 
    return <>
        <Article title={topic.title}>{topic.body}</Article>
    </>
}