import { Article } from "@/components/Article"
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export async function getServerSideProps(context) {
    const id = context.params.id;
    const result = await axios.get(process.env.NEXT_PUBLIC_API_URL+'topics/' + id);

    return {
        props: {topic:result.data},
    }
}

export default function Update({topic}){
    const route = useRouter();
    const id = route.query.id;
    const [title, setTitle] = useState(topic.title);
    const [body, setBody] = useState(topic.body);
    return <>
        <Article title="Update">
            <form onSubmit={async (evt)=>{
                evt.preventDefault(); // NOTE : page reload x
                const title = evt.target.title.value;
                const body = evt.target.body.value;
                const result = await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}topics/${id}`,{title, body});
                route.push(`/read/${id}`);
            }}>
                <p>
                    <input type="text" name="title" placeholder="제목" value={title} onChange={(evt)=>{
                        setTitle(evt.target.value);
                    }}/>
                </p>
                <p>
                    <textarea name="body" placeholder="본문" value={body} onChange={(evt)=>{
                        setBody(evt.target.value);
                    }}></textarea>
                </p>
                <p>
                    <input type="submit" value="Update"/>
                </p>
            </form>
        </Article>
    </>
}