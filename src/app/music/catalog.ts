export const playlist = [
  { title: "DEVOUR", detail: "VOILÀ × NOT A TOY · the collaboration that opens this path", search: "Devour VOILA Not A Toy" },
  { title: "DEAD EYES", detail: "A strong current-era entry point", search: "NOT A TOY DEAD EYES" },
  { title: "UNALIVE ME", detail: "Follow the darker, dramatic edge", search: "NOT A TOY UNALIVE ME" },
  { title: "KAMIKAZE", detail: "From FILTHY YUCK!", search: "NOT A TOY KAMIKAZE FILTHY YUCK" },
  { title: "PLAYING W/ DEATH", detail: "A high-energy entry from the recent catalog", search: "NOT A TOY PLAYING W DEATH" },
  { title: "NPC", detail: "A concise single from the recent run", search: "NOT A TOY NPC" },
  { title: "THE MAZE", detail: "From the 2025 singles", search: "NOT A TOY THE MAZE" },
  { title: "DOOMSDAY HOLIDAY", detail: "A 2025 EP title track", search: "NOT A TOY DOOMSDAY HOLIDAY" },
  { title: "SIMP", detail: "From PRBLMS — turn toward the band's earlier catalog", search: "NOT A TOY SIMP PRBLMS" },
  { title: "QUIT QUITTING", detail: "Close with the 2020 self-titled release", search: "NOT A TOY QUIT QUITTING" },
];

export const starterTracks = playlist.map(track => ({title: track.title, artist: track.title === 'DEVOUR' ? 'VOILÀ × NOT A TOY' : 'NOT A TOY', url: track.title === 'DEVOUR' ? 'https://www.youtube.com/watch?v=QS9RtfARHBc' : ''}));

export const listeningRoutes = [
  { title: "Follow the Sound · DEVOUR", note: "Curated ten-track route from the DEVOUR music story.", href: "/music/devour/", tracks: starterTracks },
  { title: "Independent collaborations", note: "Start with the shared releases, then choose individual songs from their catalogs.", href: "/field-notes/the-art-of-staying-independent/", tracks: [
    { title: "DEVOUR", artist: "VOILÀ × NOT A TOY", url: "https://www.youtube.com/watch?v=QS9RtfARHBc" },
    { title: "Sick Sick Soul (Vol. 1) — EP discovery", artist: "Ren × The Skinner Brothers", url: "https://music.apple.com/us/album/sick-sick-soul-vol-1-ep/1847428336" },
    { title: "Asylum — release discovery", artist: "Inpatient · Ren · Chris Webby · JP On Da Track", url: "https://renmakesmusic.bandcamp.com/album/asylum" },
  ] },
];
