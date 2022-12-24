import React from "react";
import { useRouter } from "next/router";
import Head from 'next/head';
import { getNewsById } from "../../services/NewsApis";

export default function News(props) {

    const { query } = useRouter();
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`https://main--profound-alpaca-ba9d44.netlify.app/news?id=${props.data.id}`} />
                <meta property="og:title" content={props?.data?.headlines} />
                <meta property="og:description" content={props?.data?.headlines} />
                <meta property="og:image" content={props?.data?.media} />
                <meta property="og:image:width" content="600" />
                <meta property="og:image:height" content="600" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {query.id};
            <div>{props?.data?.headlines}</div>
        </div>
    )
}

const getNews = async (id) => {
    const data = await getNewsById("ka", id).then(function (response) {
        if (response.sucess) {
            return response.result.data[0];
        } else {
            return "error"
        }
    }
    )
    return data;
}


export async function getServerSideProps(context) {
    let data = await getNews(context.query.id);
    return {
        props: { data: data }, // will be passed to the page component as props
    }
}