

//Question 40 Album:
//Question 41 Megition:
//Question 42 Great magition:
//Question 43 Unchanged magition:

// Exercise 40
type Album = {
    artist: string;
    title: string;
    tracks?: number;
  };
  
  function make_album(artist: string, title: string, tracks?: number): Album {
    const album: Album = {
        artist: artist,
        title: title,
    };
  
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
  
    return album;
  }
  
  const album1 = make_album('Artist1', 'Album Title 1');
  const album2 = make_album('Artist2', 'Album Title 2', 12); // Including the number of tracks
  const album3 = make_album('Artist3', 'Album Title 3');
  
  
  console.log(album1);
  console.log(album2);
  console.log(album3);
  
  // Exercise 41
  function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
  }
  
  
  const magiciansArray = ['Magician1', 'Magician2', 'Magician3'];
  
  
  show_magicians(magiciansArray);
  
  // Exercise 42
  function make_great(magicians: string[]): string[] {
    const greatMagicians = magicians.map((magician) => `the Great ${magician}`);
    return greatMagicians;
  }
  
  const greatMagiciansArray = make_great(magiciansArray);
  
  
  show_magicians(greatMagiciansArray);
  
  // Exercise 43
  
  const originalMagiciansArray = [...magiciansArray];
  
  const newGreatMagiciansArray = make_great([...originalMagiciansArray]);
  
  console.log('Original Magicians:');
  show_magicians(originalMagiciansArray);
  
  console.log('Great Magicians:');
  show_magicians(newGreatMagiciansArray);