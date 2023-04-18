import { ChatGPTUnofficialProxyAPI } from "chatgpt";
const getChat = async () => {
  try {
    const api = new ChatGPTUnofficialProxyAPI({
      accessToken:
        "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1UaEVOVUpHTkVNMVFURTRNMEZCTWpkQ05UZzVNRFUxUlRVd1FVSkRNRU13UmtGRVFrRXpSZyJ9.eyJodHRwczovL2FwaS5vcGVuYWkuY29tL3Byb2ZpbGUiOnsiZW1haWwiOiJjaGFybGllZ29naEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZX0sImh0dHBzOi8vYXBpLm9wZW5haS5jb20vYXV0aCI6eyJ1c2VyX2lkIjoidXNlci1lbENXVnlUZE5tYjFTNzY2ODdJSHc2czQifSwiaXNzIjoiaHR0cHM6Ly9hdXRoMC5vcGVuYWkuY29tLyIsInN1YiI6ImF1dGgwfDYzOTI4ODdlOGYyZjlkODMxM2ZiN2U4YSIsImF1ZCI6WyJodHRwczovL2FwaS5vcGVuYWkuY29tL3YxIiwiaHR0cHM6Ly9vcGVuYWkub3BlbmFpLmF1dGgwYXBwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE2ODA2NTIzOTAsImV4cCI6MTY4MTg2MTk5MCwiYXpwIjoiVGRKSWNiZTE2V29USHROOTVueXl3aDVFNHlPbzZJdEciLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIG1vZGVsLnJlYWQgbW9kZWwucmVxdWVzdCBvcmdhbml6YXRpb24ucmVhZCBvZmZsaW5lX2FjY2VzcyJ9.xSB4R16z0fHU7MHq_sHIWnW8zxUolTW0aTraq9duDpkADaGIBH2sFtxiCd0VClJObJGsuh4-H9iPIpPz39HALCEc12G8TIHmjPKKOlkekpSjFhUZm2QX-MbvjWfEQ72w4DpsHigGvBfnDE4AQOrb9jQSdhgM645YAwwIChasAYjIhQz-yAawdIfnidzVu4LT4rMsZsPuX7jh-5kqY9H5pCdxKcshih2lpyogQpvlQLOsnCwIAHebk0iJ-Vswn9313aNv09Pakw83j9gF0AgjXBUYG7MZGP7C2SRxX4NFs-JVjBYc3_NOH9SBDwjGEgmK48qF2gPYjmFSruLZY5TKQw",
      apiReverseProxyUrl:
        "https://freechat.xyhelper.cn/backend-api/conversation",
    });
    const res = await api.sendMessage("Hello World!");
    console.log(res.text);
  } catch (e) {
    throw e;
  }
};
export default getChat();
