module.exports = {
  TOKEN_SECRET: process.env.TOKEN_SECRET || 'JWT Token Secret',
  MONGO_URI: process.env.MONGO_URI || 'localhost',

  // OAuth 2.0
  FACEBOOK_SECRET: "f8970e86e8775367055b01227aa8255b" || '',
  GOOGLE_SECRET: process.env.GOOGLE_SECRET || '',

  LINKEDIN_SECRET: "J4zEt9sU0zCusFCE" || '',

  // OAuth 1.0
  TWITTER_KEY: "uwWgOWxLA10DvFI1KfoWXCmYH" || '',
  TWITTER_SECRET: "WIkXmotgoM6CPp0aiJnP2kfIgpNmdoMfCTB0qWsNBaH43lnyXj" || ''
};