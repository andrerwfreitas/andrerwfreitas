import Head from 'next/head';
import Watermark from '../../components/Watermark';

export default () =>
    <>
        <Head>
            <link rel="icon" type="image/x-icon" href="/images/logo-dev.png" />
            <title>MacOS window - André Freitas</title>
        </Head>
        <Watermark />
        <div className="rwf_flex-center rwf_width-100vw rwf_height-100vh" style={{backgroundColor: '#97b9cf', width: '100vw', height:'100vh'}}>
            <div className="rwf_window-main shadow-lg" style={{ width: '90vw', maxWidth: '350px', height: '200px', margin: '10px' }}>
                <div className="rwf_window-controls-container">
                    <div className="rwf_window-controls-box">
                        <div className="rwf_1"></div>
                        <div className="rwf_2"></div>
                        <div className="rwf_3"></div>
                    </div>
                    <p className="rwf_window-controls-container-text">Terminal</p>
                </div>
                <div className="rwf_window-body">
                    developervf@developervf-computer - %&nbsp;<span style={{ outline: '0 !important' }} contenteditable="true">⠀</span>
                </div>
            </div>
        </div>
    </>
    ;
