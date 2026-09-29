# Range Runner

Vocal warmups on a strict click. Pick a scale or one of your own licks, set your lowest and highest note, and press Play. After a one-bar count-in the click never stops: each round puts the chord on a downbeat, you sing the pattern, the click plays out the rest of the bar, and the next key comes in. The run climbs a half step (or whole step) at a time to the top of your range and walks back down.

**Live:** https://rjbrown85.github.io/Range-Runner/

## What's in it
- **Setup:** tempo, lowest and highest note, half or whole steps, route (up and down, up only, down only), chord length before you sing, an optional extra bar between rounds, click volume, piano guide on or off, chord held under you on or off.
- **Scales:** 14 common warmups, including five-note, arpeggios, the nine-note scale, octave leap, major and minor pentatonic, blues, dominant 7 arpeggio and chromatic.
- **Tab editor:** click or tap a string at a beat, type the fret (keyboard or the on-screen pad), set the length (whole to 32nd, dotted, triplet), add ties and rests, insert and delete beats, undo. Keyboard shortcuts follow Guitar Pro where they can.
- **File import:** open a Guitar Pro (.gp, .gp3, .gp4, .gp5, .gpx) or MusicXML file, pick a track and a range of bars, and send them to the editor.
- **Full piano:** the Salamander Grand Piano, 30 samples from A0 to C8.

## iPhone and iPad
- Open the live link in Safari, tap Share, then **Add to Home Screen**. It opens full screen like an app and works offline after the first load.
- Tap **Test sound** in Setup once. If you hear nothing, flip off the Silent switch (or turn up the volume) and tap it again.
- The screen stays awake while a run plays. If you switch apps, playback stops so the click doesn't drift. Press Play to start again.
- In the tab editor a tap places the cursor and a swipe scrolls the tab. Use the number pad under the tab to enter frets.

## Saving licks
Licks are saved in the browser you made them in. To move them to another device (or between this site and the Claude artifact), open **Move licks to another device** in the editor, copy them, and paste them into the other copy.

## Files
`index.html` (the whole app), `piano/` (Salamander samples), `vendor/` (Tone.js, alphaTab), `fonts/`, `icons/`, `manifest.webmanifest`, `sw.js` (offline cache). No build step. Everything is served from this repo, with no outside CDNs.

See CREDITS.md for sources and licenses.
