let id = 0;

const defaultOptions = {
  messageType: "InfoMsg",
  message: "Hit Default"
};

export default function createNotification(options) {
  console.log('from factory', options)
  return {
    ...defaultOptions,
    ...options,
    id: id++
  }
}