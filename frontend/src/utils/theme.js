
const LIGHT_MODE = {
    primary_color: '#209d5c',
    secondary_color: '#ffffff',
    error_color: '#FF5F5F',
    warning_color: '#FFFF00',
    complement_color: '#3590E4'
}

const DARK_MODE = {
    primary_color: '#000000',
    secondary_color: '#209d5c',
    error_color: '#FF5F5F',
    warning_color: '#FFFF00',
    complement_color: '#3590E4'
}

const changeMode = (mode) => {
    return mode === 'light' ? LIGHT_MODE : DARK_MODE
}

const themeHandler = {
    LIGHT_MODE,
    DARK_MODE,
    changeMode
}

export default themeHandler