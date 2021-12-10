async function getUserRepos(username) {
  const repos = await fetch(`https://api.github.com/users/${username}/repos`);
  return repos;
}

getUserRepos("rmf2pt")
     .then(repos => {
          console.log(repos.name);
}); 
