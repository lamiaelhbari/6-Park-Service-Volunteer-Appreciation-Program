"use strict";
/* The challenge consists of : The Park Service would like to combine their volunteers and
   introduce a volunteer appreciation program, where the top volunteers get a special
   edition park badge for their service.
*/
Object.defineProperty(exports, "__esModule", { value: true });
const raccoon_meadows_log_1 = require("./raccoon-meadows-log");
const wolf_point_log_1 = require("./wolf-point-log");
// Combine the volunteers : 
function combineVolunteers(volunteers) {
    return volunteers.map((volunteer) => {
        let id = volunteer.id;
        if (typeof id === 'string') {
            id = parseInt(id, 10);
        }
        return {
            id: id,
            name: volunteer.name,
            activities: volunteer.activities
        };
    });
}
// isVerified() function :
function isVerified(verified) {
    if (typeof verified === 'string') {
        return verified === 'Yes';
    }
    return verified;
}
// getHours() function:
function getHours(activity) {
    if ('hours' in activity) {
        return activity.hours;
    }
    else {
        return activity.time;
    }
}
;
// Calculate hours : 
function calculateHours(volunteers) {
    return volunteers.map((volunteer) => {
        let hours = 0;
        volunteer.activities.forEach((activity) => {
            if (isVerified(activity.verified)) {
                hours += getHours(activity);
            }
        });
        return {
            id: volunteer.id,
            name: volunteer.name,
            hours: hours,
        };
    });
}
const combinedVolunteers = combineVolunteers([].concat(wolf_point_log_1.wolfPointVolunteers, raccoon_meadows_log_1.raccoonMeadowsVolunteers));
//  print combinedVolunteers : 
console.log(combinedVolunteers);
//  print result :
const result = calculateHours(combinedVolunteers);
console.log(result);
// Wrap it up  :
// byHours() function:
function byHours(a, b) {
    return b.hours - a.hours;
}
result.sort(byHours);
console.log(result);
