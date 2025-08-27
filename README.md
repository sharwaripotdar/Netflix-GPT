# Netflix GPT

- Create React App
- Configure TailwindCSS
- Header
- Rounting of App
- Login Form
- Sign Up Form
- Form Validation
- useRef Hook
- Firebase Setup
- Deploying our app to production
- Create SignUp User Account
- Implement Sign In user API
- Created ReduxStore with userSlice
- Implemented Sign Out
- update Profile
- BugFix: Sign up user displayName and Photo picture update
- BugFix: If the user is not logged in Redirect /browse to   login page and vice-versa
- Unsubscribe to the onAuthStateChange callback
- Fetch from tmbd api Movies
- Add hardcode values into constant file
- Register TMBD API & create an app & get access token
- Get Date from TMBD now playing movies list API
- Custom Hook for Now Playing Movies
- Create movieSlice
- Update Store with movies Data
- Planning for MainContauiner & secondary container
- Fetch Data for Trailer Video
- Update Store with Trailer Video Data
- Embedded the Yotube video and make it autoplay and mute
- Tailwind Classes to make Main Container look awesome



# Structure UI
- MainContainer
    - VideoBackground
    - VideoTitle
- SecondaryContainer
    - MovieList * n
    - cards * n    


# Feture
- Login/SignUp 
    - Sign in/ Sign Up Form
    - Redirect to Browser Page
- Browser (after authentication)
    - Header
    - Main Movie
        - Tailer in Background
        - Title and Description
        - MovieSuggestions
            - MovieLists * N   
- NetflixGPT
    - Search Bar
    - Movie Suggestions            