import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import styles from './Nav.module.css';
console.log(styles);

export function Nav() {
    const router = useRouter();
    const [topics, setTopics] = useState([]);
    async function getData(){
          const resp = await fetch(process.env.NEXT_PUBLIC_API_URL+'topics');
          const data = await resp.json();
        setTopics(data);
    }
    // Note: closure. 함수 내부정의해야 topics, setTopics 접근가능
    useEffect(()=>{
        getData();
        return ()=>{
            // NOTE unmount 작업 여기에
        }
    }, [router.asPath]); // Note: 페이지가 바뀔때만
    const lis = topics.map((e) => <li key={e.id}>
        <Link href={`/read/${e.id}`}>{e.title}</Link>
    </li>);

    return <>
        {/* NOTE ul>(li>Link)*2 tab*/}
        <nav style={{
            backgroundColor: 'lightgray',
        }}>
            <ul>
                {lis}
                {/* NOTE: list 알아서 풀어줌 */}
            </ul>
        </nav>
    </>;
}
