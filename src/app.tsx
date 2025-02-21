import * as React from "react";

import { observable } from "@legendapp/state";
import { use$ } from "@legendapp/state/react";


const state$ = observable({
    settings: { theme: 'dark' },
    setTheme: (theme: string) => state$.settings.theme.set(theme)
})


export const App = () => {

    const theme = use$(state$.settings.theme)

    return <>
        <p>{theme}</p>
        <button onClick={() => state$.setTheme('light')}>Change Theme</button>
    </>;
};

export default App;