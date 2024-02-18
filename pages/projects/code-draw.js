import Head from 'next/head';
import Watermark from '../../components/Watermark';

export default () =>
    <>
        <Head>
            <link rel="icon" type="image/x-icon" href="/images/logo-dev.png" />
            <title>Code draw - André Freitas</title>
        </Head>
        <Watermark />
        <section className="rwf_flex-center" style={{ width: '100vw', height: '200px', backgroundColor: '#6dd183', textAlign: 'center', color: 'white', padding: '20px'}}>
            <h2>Todos os desenhos abaixo s&atilde;o feitos com componentes HTML, n&atilde;o s&atilde;o imagens nem vetores.</h2>
        </section>
        <section className="rwf_flex-center" style={{ width: '100vw', height: '100vh', backgroundColor: '#78a4eb' }}>
            <div id="rwf_draw-frame-main">
                <div id="rwf_draw-frame-content-main">
                    <div id="rwf_draw-frame-content-box">
                        <div id="rwf_draw-frame-square-box-1">
                            <div className="rwf_draw-frame-square-box-2"><div className="rwf_draw-bg-green-1 rwf_draw-height-1" style={{ width: '40px' }}></div></div>
                            <div className="rwf_draw-frame-square-box-2"><div className="rwf_draw-bg-green-1 rwf_draw-height-1" style={{ width: '80px' }}></div></div>
                            <div className="rwf_draw-frame-square-box-2"><div className="rwf_draw-bg-green-1 rwf_draw-height-1" style={{ width: '95px' }}></div></div>
                            <div className="rwf_draw-frame-square-box-2"><div className="rwf_draw-bg-green-1 rwf_draw-height-1" style={{ width: '115px' }}></div></div>
                            <div className="rwf_draw-frame-square-box-2"><div className="rwf_draw-bg-green-1 rwf_draw-height-1" style={{ width: '100px' }}></div></div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}><div id="rwf_draw-frame-square-1"></div></div>
                    </div>
                </div>
            </div>
        </section>
        <section className="rwf_flex-center" style={{ width: '100vw', height: '100vh', backgroundColor: '#f2d794' }}>
            <div id="rwf_draw-clock-main">
                <div id="rwf_draw-clock-box-1">
                    <div id="rwf_draw-clock-box-2"></div>
                    <div id="rwf_draw-clock-box-3"></div>
                </div>
                <div id="rwf_draw-clock-box-center"></div>
                <div id="rwf_draw-clock-box-center-2"></div>
            </div>
        </section>
        <section className="rwf_flex-center" style={{ width: '100vw', height: '100vh', backgroundColor: '#6a8691' }}>
            <div id="rwf_draw-speaker-main">
                <div id="rwf_draw-speaker-top">
                    <div id="rwf_draw-speaker-top-internal"></div>
                </div>
                <div id="rwf_draw-speaker-center">
                    <div id="rwf_draw-speaker-center-internal"></div>
                </div>
                <div id="rwf_draw-speaker-logo">
                    <p>Bowers & Wilkins</p>
                </div>
            </div>
        </section>
    </>
    ;