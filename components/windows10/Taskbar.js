export default () =>
    <>
        <nav className="rwf_os-taskbar-main">
            <div className="rwf_os-taskbar-align-left">
                <div className="rwf_os-taskbar-logo-main">
                    <img src="/windows10/windows-logo.png" width={'25'} height={'25'} />
                </div>
                <div className="rwf_os-taskbar-search-main">
                    <input placeholder="Procurar"></input>
                </div>
                <div className="rwf_os-taskbar-apps-main">
                    <div className="rwf_os-taskbar-apps-box">
                        <div className="rwf_os-taskbar-app-main">
                            <img width={taskbarAppsize} height={taskbarAppsize} src="/windows10/taskview.png" />
                        </div>
                        <div className="rwf_os-taskbar-app-main">
                            <img width={taskbarAppsize} height={taskbarAppsize} src="/windows10/microsoftedge-logo.png" />
                        </div>
                        <div className="rwf_os-taskbar-app-main">
                            <img width={taskbarAppsize} height={taskbarAppsize} src="/windows10/fileexplorer-logo.png" />
                        </div>
                        <div className="rwf_os-taskbar-app-main">
                            <img width={taskbarAppsize} height={taskbarAppsize} src="/windows10/mail-logo.png" />
                        </div>
                        <div className="rwf_os-taskbar-app-main">
                            <img width={taskbarAppsize} height={taskbarAppsize} src="/windows10/microsoftstore-logo.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="rwf_os-taskbar-mini-icons-main">
                <div className="rwf_os-taskbar-mini-icons-box">
                    <div className="rwf_os-taskbar-mini-icon-main">
                        <img width={miniIconSize} height={miniIconSize} src="/windows10/arrowup.png" />
                    </div>
                    <div className="rwf_os-taskbar-mini-icon-main">
                        <img width={miniIconSize} height={miniIconSize} src="/windows10/battery.png" />
                    </div>
                    <div className="rwf_os-taskbar-mini-icon-main">
                        <img width={miniIconSize} height={miniIconSize} src="/windows10/wifi.png" />
                    </div>
                    <div className="rwf_os-taskbar-mini-icon-main">
                        <img width={miniIconSize} height={miniIconSize} src="/windows10/volume.png" />
                    </div>
                </div>
            </div>
            <div className="rwf_os-taskbar-logo-main">
                <img src="/windows10/notifications.png" width={'25'} height={'25'} />
            </div>
        </nav>
    </>
    ;

const taskbarAppsize = 29
const miniIconSize = 20