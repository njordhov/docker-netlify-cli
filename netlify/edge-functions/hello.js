## From https://docs.netlify.com/edge-functions/get-started/

export default () => new Response("Hello world")

export const config = { path: "/test" }
