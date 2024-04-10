export default ({ env }) => ({
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: "0.0.0.0",
        port: 1025,
        ignoreTLS: true,
      },
    },
  },
  "users-permissions": {
    config: {
      jwt: {
        expiresIn: "1d",
      },
      register: {
        allowedFields: ["role"],
      },
    },
  },
});
