import useDark from "../darkmode/useDark.js";
import {useState} from "react";


export function ToggleSwitch() {
    const [colorTheme, setTheme] = useDark();
    const [isDark, setIsDark] = useState(colorTheme === 'dark')

    function toggleTheme() {
        setTheme(colorTheme)
        setIsDark(prevState => !prevState)
    }

    return (
        <div className={'py-4 px-2'}>
            <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" onChange={toggleTheme}
                       checked={!isDark}
                />
                <div
                    className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-100 dark:peer-focus:ring-cyan-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-cyan-600"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Dark Mode</span>
            </label>
        </div>
    )
}