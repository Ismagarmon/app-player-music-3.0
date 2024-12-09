import { create } from 'zustand'

const initStore = () => {

    if (!localStorage.getItem('isLogged')) {
        localStorage.setItem('isLogged', false)
        localStorage.setItem('track_list', JSON.stringify([]))
        localStorage.setItem('userId', null)
        localStorage.setItem('songname', 'Jim Yosef - Firefly _ Progressive House _ NCS')
        localStorage.setItem('artistname', null)
        localStorage.setItem('username', null)
        localStorage.setItem('zone', 'home')
        localStorage.setItem('appzone', 'Home')
        localStorage.setItem('Genre', null)
        localStorage.setItem('usuario',null)
    }

}

initStore()

const getLocalStorage = (key, defaultValue) => {
    const value = localStorage.getItem(key)
    return value ? JSON.stringify(value) : defaultValue
}

const setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}



const useStore = create((set) => ({
    isLogged: getLocalStorage('isLogged', false),
    track_list: getLocalStorage('track_list', []),
    userId: getLocalStorage('userId', null),
    username: getLocalStorage('username', null),
    songname: getLocalStorage('songname', 'Jim Yosef - Firefly _ Progressive House _ NCS'),
    artistname: getLocalStorage('artistname', null),
    zone: getLocalStorage('zone', 'home'),
    usuario: getLocalStorage('usuario', null),
    appzone: getLocalStorage('appzone', 'Home'),
    genre: getLocalStorage('Genre', null),

    logout: (data) => {
        set( (state) => ({
          ...state,
            isLogged: data.isLogged,
            zone: 'home',
            appzone: 'Home',
            userId: data.userId,
            usuario: data.usuario,
            username: data.username
        }))

        setLocalStorage('isLogged', false)
        setLocalStorage('userId', null)
        setLocalStorage('username', null)
        setLocalStorage('usuario', null)
        setLocalStorage('zone', 'home')
        setLocalStorage('appzone', 'Home')
    },

    resetState: () => {
        set({
          zone: 'home',
          usuario: null,
          appzone: 'Home'
        })

        setLocalStorage('zone', 'home')
        setLocalStorage('usuario', null)
        setLocalStorage('appzone', 'Home')
    },

    setGenre: (genre) => {
        set(() => {
            const newState = { genre }
            setLocalStorage('Genre', genre)
            return newState
        })
    },

    setZoneHome: (zone) => {
        set(() => {
            const newState = { zone }
            setLocalStorage('zone', zone)
            return newState
        })
    },

    setZoneApp: (zone) => {
        set(() => {
            const newState = { appzone: zone }
            setLocalStorage('appzone', zone)
            return newState
        })
    },

    setLoggedState: (data) => set((state) => ({
        ...state,
        isLogged: data.isLogged,
        zone: data.zone,
        userId: data.userId,
        usuario: data.usuario,
    })),

    setUserName: (username) => {
        set(() => {
            const newState = { username }
            setLocalStorage('username', username)
            return newState
        })
    },

    setArtistName: (artistname) => {
        set(() => {
            const newState = { artistname }
            setLocalStorage('artistname', artistname)
            return newState
        })
    },

    setSongName: (songname) => {
        set(() => {
            const newState = {  songname }
            setLocalStorage('songname', songname)
            return newState
        })
    },

    addTrack: (track) => {
        set((state) => {
            const newTrackList = [track]
            setLocalStorage('track_list', newTrackList)
            return { ...state, track_list: newTrackList }
        })
    },

    clearTracks: () => {
        set(() => {
            setLocalStorage('track_list', [])
            return { track_list: [] }
        })
    },

    shuffleTracks: () => {
        set((state) => {
            const newTrackList = [...state.track_list].sort(() => Math.random() - 0.5)
            setLocalStorage('track_list', newTrackList)
            return { ...state, track_list: newTrackList }
        })
    },
}))

export default useStore;