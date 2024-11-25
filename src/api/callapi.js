export const LoginDataUser = async (e, pw) => {
    const data = { email: e, password: pw }
    const sendata = await fetch(
        'https://apimap-h4m5.onrender.com/user/login',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    )

    const response = await sendata.json()

    return response

}

export const LoginDataArtist = async (n, pw) => {
    const data = { name: n, password: pw }
    const sendata = await fetch(
        'https://apimap-h4m5.onrender.com/artist/login',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    )

    const response = await sendata.json()

    return response

}

export const RegisterDataArtist = async (n, pw) => {
    const data = { name: n, password: pw }
    const sendata = await fetch(
        'https://apimap-h4m5.onrender.com/artist/artist',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    )

    const response = await sendata.json()

    return response

}

export const RegisterDataUser = async (un, pw, e) => {

    const n = 'NoName'
    const sn = 'NoSurname'
    const a = 0
    const ct = 'NoCountry'
    const c = 'NoCity'

    const data = {
        username: un,
        password_nc: pw,
        email: e,
        name: n,
        surnames: sn,
        age: a,
        country: ct,
        city: c
    }

    const sendata = await fetch(
        'https://apimap-h4m5.onrender.com/user/users',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    )

    const response = await sendata.json()

    return response
}

export const GetGenres = async () => {

    const sendata = await fetch('https://apimap-h4m5.onrender.com/song/genres')
    const response = await sendata.json()
    return response
}

export const GetArtsits = async () => {

    const sendata = await fetch('https://apimap-h4m5.onrender.com/artist/artists')
    const response = await sendata.json()
    return response
}

export const GetAlbums = async () => {

    const sendata = await fetch('https://apimap-h4m5.onrender.com/artist/albums')
    const response = await sendata.json()
    return response
}

export const GetSongs = async () => {

    const sendata = await fetch('https://apimap-h4m5.onrender.com/artist/songs')
    const response = await sendata.json()
    return response
}

export const GetSongsByGenre = async (idgenre) => {

    const sendata = await fetch(`https://apimap-h4m5.onrender.com/artist/songs/${idgenre}`)
    const response = await sendata.json()
    return response
}

export const GetUsers = async () => {

    const sendata = await fetch('https://apimap-h4m5.onrender.com/user/users')
    const response = await sendata.json()
    return response
}

export const GetUsersByEmail = async (email) => {

    const sendata = await fetch(`https://apimap-h4m5.onrender.com/user/email/${email}`)
    const response = await sendata.json()
    return response
}

export const GetUsersById = async (id) => {

    const sendata = await fetch(`https://apimap-h4m5.onrender.com/user/users/${id}`)
    const response = await sendata.json()
    return response
}

export const UpdateDataUser = async (nameu, surnameu, usernameu, ageu, cityu, countryu, userIDu) => {

    const data = {
        name: nameu,
        surname: surnameu,
        username: usernameu,
        age: ageu,
        city: cityu,
        country: countryu,
        userID: userIDu
    }

    const sendata = await fetch(
        'https://apimap-h4m5.onrender.com/user/users',
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    )

    const response = await sendata.json()

    return response
}

export const DeleteUser = async (userIDu) => {

    const data = {
        userID: userIDu
    }

    const sendata = await fetch(
        'https://apimap-h4m5.onrender.com/user/users',
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    )

    const response = await sendata.json()

    return response
}

export const CreatePlaylists = async (nameu,iduseru) => {

    const data = {
        name: nameu,
        id_user: iduseru
    }

    const sendata = await fetch(
        'https://apimap-h4m5.onrender.com/user/playlists',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    )

    const response = await sendata.json()

    return response
}

export const GetPlaylists = async (idUser) => {

    const sendata = await fetch(`https://apimap-h4m5.onrender.com/artist/playlists/${idUser}`)
    const response = await sendata.json()
    return response
}

const n = ''
export default n
