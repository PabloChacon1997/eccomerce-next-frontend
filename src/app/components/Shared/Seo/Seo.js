import Head from "next/head";


export function Seo(props) {
  const { title = "Gaming - Tus juegos favoritos", description="Tus juegos favoritos para PlayStation, Xbos, PC al mejor precio" } = props;
  return (
    <Head>
      <title>{title}</title>
      <meta property="description" content={description}/>
    </Head>
  )
}