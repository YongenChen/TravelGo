import './SeasonDisplay.css';
import React from 'react';
// convention is that configs and helper functions always at the top first

// how come this function doesn't have () => { format?
const seasonConfig = {
    summer: {
        text: "Let's hit the beach!",
        iconName: "sun"
    },
    winter: {
        text: "Brrr it's chilly!",
        iconName: "snowflake"
    }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? "summer" : "winter";
    } else {
        return lat > 0 ? "winter": "summer";
    }
};

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season]; // why is this square brackets?
    
    /*
    you can also just put the logic inside of the return statement (using same ternary expression)

    return (
        <div>
            {season === "winter" ? "Brrr it is chilly" : "Let's hit the beach"}
        </div>
    );
    */


    // {`${icon}} takes the value of whatever icon is and put it into that string template
    // the icon afterwards is just the class name
    // why did we use ` for the inside of the brackets? what is its purpose?
    return (
        <div className={`season-display ${season}`}>
           <i className={`icon-left massive ${iconName} icon`} />
           <h1>{text}</h1>
           <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;