function Run() {
    var topLeftPoint = findTopLeft(data);
    var topRightPoint = findTopRight(data);
    var bottomLeftPoint = findBottomLeft(data);
    var bottomRightPoint = findBottomRight(data);

    var boundingBox = {
        topLeft: topLeftPoint,
        topRight: topRightPoint,
        bottomLeft: bottomLeftPoint,
        bottomRight: bottomRightPoint
    };

    console.log("Bounding box computed for trayhughes8@tamu.edu:");
    console.log(boundingBox);
}

function findTopLeft(data) {
    return data.reduce((topLeft, point) => {
        if (point.lat > topLeft.lat || 
           (point.lat === topLeft.lat && point.lon < topLeft.lon)) {
            return point;
        }
        return topLeft;
    }, data[0]);
}

function findTopRight(data) {
    return data.reduce((topRight, point) => {
        if (point.lat > topRight.lat || 
           (point.lat === topRight.lat && point.lon > topRight.lon)) {
            return point;
        }
        return topRight;
    }, data[0]);
}

function findBottomLeft(data) {
    return data.reduce((bottomLeft, point) => {
        if (point.lat < bottomLeft.lat || 
           (point.lat === bottomLeft.lat && point.lon < bottomLeft.lon)) {
            return point;
        }
        return bottomLeft;
    }, data[0]);
}

function findBottomRight(data) {
    return data.reduce((bottomRight, point) => {
        if (point.lat < bottomRight.lat || 
           (point.lat === bottomRight.lat && point.lon > bottomRight.lon)) {
            return point;
        }
        return bottomRight;
    }, data[0]);
}
