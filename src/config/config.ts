export default () => ({
  port: parseInt(process.env.PORT || '3000'),
  frontendUrl: process.env.FRONTEND_URL,
});
