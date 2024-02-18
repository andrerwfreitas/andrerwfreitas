import Taskbar from "./Taskbar";

export default (props) =>
    <div id="rwf_9783">
        <div className="rwf_vertical-flex">
            {props.children}
        </div>
        <Taskbar />
    </div>
    ;