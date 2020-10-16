const urlParse = require("url-parse");

import styles from "./TestStatus.module.css";
// UI Elements
import { Button } from "primereact/button";

// Components

const getSiteOriginLogo = (origin) => `https://logo.clearbit.com/${origin}`;

const TestStatus = ({ siteImage, url, vitalsScore }) => {
  const {
    details: { data: image },
  } = siteImage;

  const siteHostName = urlParse(url).host;

  const originLogo = getSiteOriginLogo(siteHostName);

  return (
    <div className="p-d-flex p-flex-direction-row p-jc-between p-align-center p-mt-4 p-py-4 p-px-2">
      <div className="p-d-flex p-flex-direction-column p-align-center">
        <div>
          <img
            src={`https://logo.clearbit.com/${originLogo}`}
            alt={`Site Logo`}
            width="70px"
            className="p-mr-2"
          />
        </div>

        <div>
          <div className="p-text-bold" style={{ fontSize: "1.2em" }}>
            <a href={siteHostName} target="_BLANK">
              {siteHostName}
            </a>
          </div>
          <div className="p-text-normal" style={{ fontSize: "1em" }}>
            <span className="p-mr-1">Results For |</span>
            <a href={url} target="_BLANK">
              {url}
            </a>
          </div>
        </div>
      </div>

      <div>
        <span className="p-buttonset">
          <Button label="Desktop" icon="pi pi-desktop" />
          <Button disabled label="Mobile" icon="pi pi-mobile" />
        </span>
      </div>
    </div>
  );
};

export default TestStatus;
