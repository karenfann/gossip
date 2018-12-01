const computeRadius = (user_latitude, user_longitude, post_latitude, post_longitude) => {
    const user_latitude_radians = Math.PI * user_latitude/180;
    const post_latitude_radians = Math.PI * post_latitude/180;
    
    let theta = user_longitude - post_longitude;

    let theta_radians = Math.PI * theta/180;

    let dist = Math.sin(user_latitude_radians) * Math.sin(post_latitude_radians) + Math.cos(user_latitude_radians) 
        * Math.cos(post_latitude_radians) * Math.cos(theta_radians);
    
    if (dist > 1) {
        dist = 1;
    }

    dist = Math.acos(dist) * 180/Math.PI * 60 * 1.1515;

    return Math.round(dist*100) / 100;
}

export default computeRadius