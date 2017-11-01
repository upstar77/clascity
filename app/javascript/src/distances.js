import R from 'ramda';

/* eslint-disable */
function deg2rad(deg) {
  return deg * (Math.PI/180)
}

export function getDistanceFromLatLonInM(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1);
  var a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c * 1000; // Distance in m
  return d;
}
/* eslint-enable */

function isLocationInBounds(sw, ne, location) {
  const latInBounds = location.latitude >= sw.latitude &&
                      location.latitude <= ne.latitude;

  const lngInBounds = location.longitude >= sw.longitude &&
                      location.longitude <= ne.longitude;

  return latInBounds && lngInBounds;
}

function hasOneLocationInBounds(locations, sw, ne) {
  return R.any(location => (
    isLocationInBounds(sw, ne, location)
  ), locations);
}

export function filterByBounds(classes, sw, ne) {
  return R.filter(classe => (
    hasOneLocationInBounds(classe.locations, sw, ne)
  ), classes);
}
