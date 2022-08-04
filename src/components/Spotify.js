import * as React from "react";
import { addPropertyControls, ControlType } from "framer";

const urlRegex = /(https?:\/\/[^ ]*)/;

const createEmbedUrl = (sourceUrl, theme = 0) => {
    if (sourceUrl.length < 5) { return null };
    const strippedUrl = sourceUrl.includes("iframe") ? sourceUrl.match(urlRegex)[1].replace(`"`, "") : sourceUrl; const url = new URL(strippedUrl);
    if (!url.pathname.includes("embed")) { url.pathname = `/embed${url.pathname}` };
    url.search = `theme=${theme}`;
    return url.toString();
};


export function Spotify(props) {
    const identifier = createEmbedUrl(props.url, props.theme);
    return (React.createElement("iframe", { style: { height: "100%", width: "100%" }, frameBorder: 0, src: identifier }));
};

Spotify.defaultProps = { url: "https://open.spotify.com/album/31qVWUdRrlb8thMvts0yYL?si=Jl-8Mnc3RNGuOtqRC7NXVg", width: 280, height: 350, theme: 1 };
addPropertyControls(Spotify, { url: { type: ControlType.String, title: "URL" }, theme: { type: ControlType.Enum, displaySegmentedControl: true, options: [1, 0], optionTitles: ["On", "Off"] } });
export const __FramerMetadata__ = { exports: { Spotify: { type: "reactComponent", slots: [], annotations: { framerIntrinsicWidth: "280", framerIntrinsicHeight: "350" } } } }; 