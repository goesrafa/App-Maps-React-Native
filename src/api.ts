const ACCESS_TOKEN_MAP_BOX =
"access_token=pk.eyJ1IjoiZ29lc3JhZmEiLCJhIjoiY2w5b29pMHB0MGswZjNycXBiejVoejExdyJ9.E2rc6--YDWNA6heAMWAvKw";

export const fetchLocalMapBox = (local: string) =>
fetch(
  `https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?${ACCESS_TOKEN_MAP_BOX}`
).then(response => response.json()).then(data => data);

export const fetchUserGithub = (login: string) =>
fetch(`https://api.github.com/users/${login}`).then(response => response.json()).then(data => data);