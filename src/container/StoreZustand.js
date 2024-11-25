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
    appzone: getLocalStorage('appzone', 'Home'),
    genre: getLocalStorage('Genre', null),

    setGenre: (genre) => {
        set((state) => {
            const newState = { genre }
            setLocalStorage('Genre', genre)
            return newState;
        })
    },

    setZoneHome: (zone) => {
        set((state) => {
            const newState = { zone }
            setLocalStorage('zone', zone)
            return newState
        });
    },

    setZoneApp: (zone) => {
        set((state) => {
            const newState = { appzone: zone }
            setLocalStorage('appzone', zone)
            return newState
        });
    },

    login: (userId) => {
        set((state) => {
            const newState = { isLogged: true, userId }
            setLocalStorage('isLogged', true)
            setLocalStorage('userId', userId)
            return newState
        });
    },

    setUserName: (username) => {
        set((state) => {
            const newState = { username }
            setLocalStorage('username', username)
            return newState
        });
    },

    setArtistName: (artistname) => {
        set((state) => {
            const newState = { artistname }
            setLocalStorage('artistname', artistname)
            return newState
        });
    },

    setSongName: (songname) => {
        set((state) => {
            const newState = {  songname }
            setLocalStorage('songname', songname)
            return newState
        });
    },

    logout: () => {
        set(() => {
            const newState = { userId: null }
            setLocalStorage('isLogged', false)
            setLocalStorage('userId', null)
            return newState
        });
    },

    addTrack: (track) => {
        set((state) => {
            const newTrackList = [track]
            setLocalStorage('track_list', newTrackList)
            return { ...state, track_list: newTrackList }
        });
    },

    clearTracks: () => {
        set(() => {
            setLocalStorage('track_list', [])
            return { track_list: [] }
        });
    },

    shuffleTracks: () => {
        set((state) => {
            const newTrackList = [...state.track_list].sort(() => Math.random() - 0.5)
            setLocalStorage('track_list', newTrackList)
            return { ...state, track_list: newTrackList }
        });
    },
}));

export default useStore;