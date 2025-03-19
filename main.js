

document.addEventListener('DOMContentLoaded', function(){
    const url = 'https://api.github.com/users/CaioCroccia22';

    const button = document.getElementById('button');
    const seguindo = document.getElementById('seguindo');
    const seguidores = document.getElementById('seguidores');
    const nome = document.getElementById('nome');
    const repositorios = document.getElementById('repositorios');
    const profileImage = document.getElementById('profile-picture');

    button.addEventListener('click', function(){

        fetch(url)
            .then(function(response){
                console.log(response);
                return response.json();

            })
            .then(function(json){
                console.log(json);
                const login = json.login;
                const followers = json.followers;
                const following = json.following;
                const public_repos = json.public_repos;
                profileImage.src = json.avatar_url;

                nome.innerHTML = login;
                seguidores.innerHTML = followers;
                seguindo.innerHTML = following;
                repositorios.innerHTML = public_repos;
               
                button.innerHTML = `<a href="https://github.com/CaioCroccia22" style="text-decoration: none; color: #fff;">Clique aqui para ir para o Github</a>`

            })
    })
})

// {
//     "login": "CaioCroccia22",
//     "id": 118224318,
//     "node_id": "U_kgDOBwv1vg",
//     "avatar_url": "https://avatars.githubusercontent.com/u/118224318?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/CaioCroccia22",
//     "html_url": "https://github.com/CaioCroccia22",
//     "followers_url": "https://api.github.com/users/CaioCroccia22/followers",
//     "following_url": "https://api.github.com/users/CaioCroccia22/following{/other_user}",
//     "gists_url": "https://api.github.com/users/CaioCroccia22/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/CaioCroccia22/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/CaioCroccia22/subscriptions",
//     "organizations_url": "https://api.github.com/users/CaioCroccia22/orgs",
//     "repos_url": "https://api.github.com/users/CaioCroccia22/repos",
//     "events_url": "https://api.github.com/users/CaioCroccia22/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/CaioCroccia22/received_events",
//     "type": "User",
//     "user_view_type": "public",
//     "site_admin": false,
//     "name": null,
//     "company": null,
//     "blog": "",
//     "location": null,
//     "email": null,
//     "hireable": null,
//     "bio": null,
//     "twitter_username": null,
//     "public_repos": 72,
//     "public_gists": 0,
//     "followers": 35,
//     "following": 40,
//     "created_at": "2022-11-14T21:49:16Z",
//     "updated_at": "2024-10-27T23:56:05Z"
// }