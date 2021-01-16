import React, { Component , createContext} from 'react';
export const ThemeContext = createContext()

class ThemeContextProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Bob Falling', 
            isLightTheme: true,
            lightTheme: {syntax: '#555', ui: '#ddd', bg: '#eee'},
            darkTheme: {syntax: '#ddd', ui: '#333', bg: '#555'}
         }
    }
    render() { 
        return ( 
            <div className='themeContext'>
                <ThemeContext.Provider value={{...this.state}}>
                    {this.props.children}
                </ThemeContext.Provider>
            </div>
         );
    }
}
 
export default ThemeContextProvider;