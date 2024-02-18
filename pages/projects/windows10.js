import Head from 'next/head';
import Layout from "/components/windows10/Layout";
import Watermark from '../../components/Watermark';

export default () =>
    <>
        <Head>
            <link rel="icon" type="image/x-icon" href="/images/logo-dev.png" />
            <title>Windows 10 - André Freitas</title>
        </Head>
        <Watermark />
        <Layout></Layout>
    </>
    ;