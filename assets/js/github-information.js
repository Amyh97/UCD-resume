function userInformationHTML(user){
    return `<h2>${usernmane}<span class="small-name">(@<a href="${user.html_url}" target ="_blank>${user.login}</a></span></h2>
    <div class="gh-content">
        <div clas="gh-avatar">
        <a href= "${user.html-url}" target="_blank">
        <img src="${user.avatar_url} width= "80" height="80" alt="${user.login}></a>
        </div>
        <p>Followers: ${user.followers} - Following : ${users.following} <br> Reops: ${user.public_repos}</p>
    </div>`
};

function fetchGitHubInformation (event) { 
    var username = $("#gh-username").value();
    if (!username){
        $("#gh-user-data").html(`<h2>Please enter a GitHub username</h2>`);
        return;
    }

$("#gh-user-data").html(
    `<div id=loader><img src="assets/css/loader.gif alt = "loading"/></div>`
);

$.when(
    $.getJSON(`https://api.github.com/users/${usernames}`))
.then(
    function(response) {
        var userData = response;
        $("#gh-user-data").html(userInformationHTML(userdata));
    }, function(errorResponse) {
        if (errorResponse.status== 404) {
            $("#gh-user-data").html(`<h2>No info found for ${username}</h2>`);
        }else {
            console.log(errorResponse);
            $("#gh-user-data").html(`<h2>Error: ${errorResponse.response.JSON.message}</h2>`);
        }
    });
}