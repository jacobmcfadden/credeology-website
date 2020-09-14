let id = 0;

const defaultOptions = {
  messageType: "SystemMessage",
  message: "Notification Content failed to come through"
};

export default function createNotification(options) {
  return {
    ...defaultOptions,
    ...options,
    id: id++
  }
}