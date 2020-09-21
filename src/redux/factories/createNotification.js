let id = 0;

const defaultOptions = {
  messageType: "SystemMessage",
  message: ""
};

export default function createNotification(options) {
  return {
    ...defaultOptions,
    ...options,
    id: id++
  }
}