export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "https://auto-playlist.herokuapp.com/auth/spotify/callback";
const clientID = "9c774d60d9fe4fae99abdd3eca6ee553";
const scopes = [
    'user-read-email',
      'user-read-private',
      'playlist-read-private',
      'playlist-read-collaborative',
      'playlist-modify-public',
      'playlist-modify-private',
      'user-library-read',
      'user-library-modify',
      'user-follow-read',
      'user-follow-modify',

    // 'user-modify-playlist'
]

export const loginUrl = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join(',')}&response_type=token&show_dialog=true`

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            let parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1])
            return initial
        }, {});
}