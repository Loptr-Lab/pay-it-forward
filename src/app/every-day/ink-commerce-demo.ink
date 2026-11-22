// Original demonstration script for Pay It Forward.
// Inspired by branching-narrative techniques; not copied from Inpatient Corridors.
VAR found_music = false
VAR found_art = false

=== start ===
You discover a strange yellow door at the end of a corridor.
A note says: "Follow what catches your attention. Every discovery leads somewhere."
* [Listen through the door.] 
    ~ found_music = true
    A song spills into the corridor. You find an independent artist and their Bandcamp catalog.
    -> discovery
* [Look at the drawings on the wall.]
    ~ found_art = true
    The drawings reveal a comic universe. You find a creator's official shop.
    -> discovery

=== discovery ===
You found a creative world beyond the first thing you noticed.
{ found_music and found_art:
    You followed both the sound and the art.
- found_music:
    You followed the music.
- found_art:
    You followed the art.
}
* [Explore another part of the world.]
    -> start
* [Support the artist directly, if you want.]
    -> commerce
* [Finish the adventure.]
    -> END

=== commerce ===
Direct support can take many forms: listen, follow, share an official link, buy music, or explore merchandise. Spending is optional.
-> END
