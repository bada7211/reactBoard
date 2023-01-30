import { Article } from "@/components/Article"
import axios from "axios";
import { useRouter } from "next/router";

export default function Create(){
    const route = useRouter();
    return <>
        <Article title="Create">
            <form onSubmit={async (evt)=>{
                evt.preventDefault(); // NOTE : page reload x
                const title = evt.target.title.value;
                const body = evt.target.body.value;
                const result = await axios.post(process.env.NEXT_PUBLIC_API_URL+'topics',{title, body});
                route.push(`/read/${result.data.id}`);
            }}>
                <p>
                    <input type="text" name="title" placeholder="제목"/>
                </p>
                <p>
                    <textarea name="body" placeholder="본문"></textarea>
                </p>
                <p>
                    <input type="submit" value="Create"/>
                </p>
            </form>
        </Article>
    </>
}