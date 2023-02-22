function javelinThrow(v,a){

    let height =  (v*Math.sin(a*3.14/180))**2 / (2 * 9.81);
    let range = (2 * v*Math.sin(a*3.14/180) / 9.81) * (v * Math.cos(a*3.14/180));

    return `Ymax=${Math.round(height)}m, Xmax=${Math.round(range)}m`;
}

module.exports = javelinThrow;