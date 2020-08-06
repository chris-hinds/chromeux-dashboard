import axios from "axios";

const SITE_BASE_URL = "https://www.bbc.com";
const CONNECTION_TYPE = "3G";
const DEVICE = "PHONE";
const METRICS = [
  "first_contentful_paint",
  "first_input_delay",
  "largest_contentful_paint",
  "cumulative_layout_shift",
];

const REQUEST_CONFIG = {
  params: {
    key: process.env.CRUX_API_KEY,
  },
};

export default async (req, res) => {
  const {
    query: { tld },
  } = req;

  const REQUEST_BODY = {
    effectiveConnectionType: CONNECTION_TYPE,
    formFactor: DEVICE,
    metrics: METRICS,
    url: `${SITE_BASE_URL}/${tld}`,
  };

  console.log(`Request Body --------` + JSON.stringify(REQUEST_BODY));

  try {
    const cruxResponse = await axios.post(
      process.env.CRUX_API_BASE_ENDPOINT,
      REQUEST_BODY,
      REQUEST_CONFIG
    );

    const { data, status } = cruxResponse;

    if (status != 200) {
      res.send("error fetch data");
    }

    res.send(data);
  } catch (error) {
    res.send(error);
  }
};
