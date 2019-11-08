const baseUrl = 'http://localhost:3000/'
const logInUrl = baseUrl + 'login'
const validateUrl = baseUrl + 'validate'

const newUsersUrl = baseUrl + 'signup'
const newTeamUrl = baseUrl + 'createteam'
const newPlayerUrl = baseUrl + 'createplayer'
const newGameUrl = baseUrl + 'creategame'
const newCommentUrl = baseUrl + 'createcomment'
const newVoteUrl = baseUrl + 'createvote'
const joinTeamUrl = baseUrl + 'jointeam'

const gamesUrl = baseUrl + 'games'
const teamsUrl = baseUrl + 'teams'
const usersUrl = baseUrl + 'users'
const playersUrl = baseUrl + 'players'
const votesUrl = baseUrl + 'votes'
const usertypesUrl = baseUrl + 'usertypes'

const topScorerUrl = baseUrl + 'topscorer'
const topScorersUrl = baseUrl + 'topscorers'
const topAssisterUrl = baseUrl + 'topassister'
const topAssistersUrl = baseUrl + 'topassisters'

const get = url => 
    fetch(url, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
}).then(resp => resp.json())


const post = (url, data) => 
fetch(url, {
    method: 'POST', 
    headers:  { 
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token') 
    },
    body: JSON.stringify( data )
}).then(resp => resp.json())


const patch = (url, id, objToUpdate) =>
fetch(`${url}/${id}`, {
    method: 'PATCH',
        headers: {
           'Content-Type': 'application/json',
           Authorization: localStorage.getItem('token') 
        },
        body: JSON.stringify(objToUpdate)
}).then(response => response.json())



const logIn = user => post(logInUrl, user)
const validate = () => get(validateUrl)
const signUp = (user) => post(newUsersUrl, user)
const createTeam = (team) => post(newTeamUrl, team)
const createPlayer = (player) => post(newPlayerUrl, player)
const createGame = (game) => post(newGameUrl, game)
const createComment = (comment) => post(newCommentUrl, comment)
const games = () => get(gamesUrl)
const game = (id) => get(`${gamesUrl}/${id}`)
const teams = () => get(teamsUrl)
const players = () => get(playersUrl)
const votes = () => get(votesUrl)
const users = () => get(usersUrl)
const usertypes = () => get(usertypesUrl)
const createVote = (vote) => post(newVoteUrl, vote)
const joinTeam = (user, id) => patch(usersUrl, id, user)
const updateGame = (game, id) => patch(gamesUrl, id, game)
const currentUser = (id) => get(`${usersUrl}/${id}`)

const topScorer = (id) => get(`${topScorerUrl}/${id}`)
const topScorers = (id) => get(`${topScorersUrl}/${id}`)
const topAssister = (id) => get(`${topAssisterUrl}/${id}`)
const topAssisters = (id) => get(`${topAssistersUrl}/${id}`)

// const topScorer = (id ) => fetch(`${topScorerUrl}/${id}`).then(console.log)
window.validate = validate
window.topScorer = topScorer

export default { logIn, validate, signUp, createTeam, createPlayer, createGame, games, teams, users,
    createComment, createVote, joinTeam, players, votes, usertypes, updateGame, topScorer, topScorers, 
    topAssister, topAssisters, currentUser, game}