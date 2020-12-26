import Head from 'next/head'
import Image from 'next/image'
import Navigation from "@components/navigation"

const Hello = () => (
    <>
    <Head>
        <title>Blog Pissulin.Dev </title>
        <meta property='og:title' content="Blog Pissulin.Dev" />
    </Head>
    <Navigation />
    <article>
        <h1>Hello Fast Post</h1>
        <Image 
            src="/post/SobreNextJS/peixe.jpg"
            width={640}
            height={427} 
        />
    </article>
    </>
)

export default Hello