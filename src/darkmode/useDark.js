import {useEffect, useState} from "react";


export default function useDark() {
    const [theme, setTheme] =
        useState(localStorage.theme ||
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark':'light'));

    const colorTheme = theme === 'dark' ? 'light' : 'dark';

    useEffect(() => {
        const root = document.documentElement
        root.classList.remove(colorTheme)
        root.classList.add(theme)
        localStorage.setItem('theme', theme)
    }, [theme, colorTheme])

    return [colorTheme, setTheme]
}