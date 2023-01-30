import '@/styles/globals.css'
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>

  // NOTE: Auto Inport / Auto Rename Tag / GitHub Copilot / Path Intelisense / Turbo Console Log
}
