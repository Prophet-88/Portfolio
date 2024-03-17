import axios from "axios";

const webhook = import.meta.env.VITE_SLACK_WEBHOOK_URL;
const user_id = import.meta.env.VITE_SLACK_USER_ID;

const sendSlackMessage = async (form) => {
  const payload = {
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `<${user_id}> *You received something*`,
        },
      },
      {
        type: "divider",
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*${form.name}*\n${form.email} \n${form.message}`,
        },
      },
      {
        type: "divider",
      },
    ],
  };

  let res;
  try {
    res = await axios.post(webhook, JSON.stringify(payload), {
      withCredentials: false,
      transformRequest: [
        (data, headers) => {
          if (headers && headers.post) {
            delete headers.post["Content-Type"];
          }
          return data;
        },
      ],
    });

    if (res.status === 200) {
      console.log("Message Sent");
    } else {
      console.log("Error");
    }
  } catch (error) {
    console.log("Error");
  }
};

export default sendSlackMessage;
