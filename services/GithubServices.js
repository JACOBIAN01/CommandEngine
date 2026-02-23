const axios = require("axios")
async function GithubService(username) {
   try{
    const res = await axios.get(`http://api.github.com/users/${username}`)
    console.log("Username: ",res.data.login);
    console.log("Followers: ",res.data.followers);
   }catch(err){
    console.log("Error",err);
   }
}

module.exports = GithubService;
