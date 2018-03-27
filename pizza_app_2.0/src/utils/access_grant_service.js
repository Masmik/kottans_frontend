export function checkGrantAccess(currentAccess, routeConfigItem) {

    // check if route has no restriction
    if (routeConfigItem.access.length == 0) {
        return true;
    }

    // search that user has privileges to view current route
    for (let accessUser of currentAccess) {
        for (let accessRoute of routeConfigItem.access) {
            if (accessUser === accessRoute) {
                return true;
            }
        }

    }
    // or if he does not deserve)))
    return false;
}


