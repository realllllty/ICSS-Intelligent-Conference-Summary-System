interface dpMsgUnit {
  keywords: string[];
  time: string;
  title: string;
  preview: string;
  length: string;
}

const dpMsg: dpMsgUnit[] = [];

//for test usage...
const msg = {
  keywords: ["test", "example"],
  time: "2022-05-01",
  title: "This is a test message",
  preview: "This is the preview content of the test message.",
  length: "57:32",
};

const msg2 = {
  keywords: ["test2", "example2"],
  time: "2022-05-01",
  title: "This is a test message2",
  preview: "This is the preview content of the test message2.",
  length: "27:52",
};

const msg3 = {
  keywords: ["test3", "example3"],
  time: "2022-05-01",
  title: "This is a test message3",
  preview: "This is the preview content of the test message2.",
  length: "27:52",
};

dpMsg.push(msg, msg2, msg3);

export { dpMsg };
