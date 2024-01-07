const { Octokit } = require("@octokit/core");

const octokit = new Octokit({
  //   auth: "YOUR-TOKEN",
});

export const priceCard = async () => {
  const result = await octokit.request(
    "GET /gists/27afe42625d435482cf52dc0eae72089",
    {
      //   gist_id: "GIST_ID",
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );
  //return JSON.parse(result.data.files["gistfile1.txt"].content);
  const res = result.data.files["gistfile1.txt"].content;
  return res;
};
