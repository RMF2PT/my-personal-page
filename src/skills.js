async function getUserRepos() {
  const url = "https://api.github.com/users/rmf2pt/repos"
  const response = await fetch(url);
  return result = await response.json();
}

async function getRepoLanguages(repo) {
  const url = `https://api.github.com/repos/rmf2pt/${repo}/languages`;
  const response = await fetch(url);
  return result = await response.json();
}

getUserRepos().then(result => {

  const languages = [];
  const repos = [];
  const reposLanguage =[];
  result.forEach(repo => {
    repos.push(repo.name);
    if (!languages.includes(repo.language)) {
      languages.push(repo.language);
    }
  });
  
  console.log(repos);
  
  repos.forEach(repo => {
    getRepoLanguages(repo).then(repoLanguage => {
      reposLanguage.push(repoLanguage); 
    })
  })

  console.log(reposLanguage);
})
