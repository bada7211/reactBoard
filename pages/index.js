import { useEffect } from "react";
import { Article } from "../components/Article";
import Layout from "@/components/Layout";

function Welcome({title}){
  return <Article title={title}>Hello.</Article>
}

export default function Home() {
  return (
    <>
      <Welcome title="Welcome"></Welcome>
    </>
  )
}
