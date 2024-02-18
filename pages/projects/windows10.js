import Head from 'next/head';
import Watermark from '../../components/Watermark';
import Taskbar from '../../components/windows10/Taskbar';

export default () =>
    <>
        <Head>
            <link rel="icon" type="image/x-icon" href="/images/logo-dev.png" />
            <title>Windows 10 - André Freitas</title>
        </Head>
        <Watermark />
        <div id="rwf_9783">
            <div className="rwf_vertical-flex">
                
            </div>
            <Taskbar />
        </div>
        <div id='rwf_windows10-size-error'>
            <div>
            <h3>O Seu dispositivo é demasiado pequeno para abrir este projeto</h3>
            <p>Abra esta página num dispositivo com pelo menos 700px de largura.<br/></p>
            </div>
        </div>
    </>
    ;