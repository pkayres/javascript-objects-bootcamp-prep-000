var playlist = {
  Coldplay:'sparks'
}
function updatePlaylist(playlist, artistName, songTitle){
   playlist.Beatles = 'yogurt';
  return playlist 
}
function removeFromPlaylist(playlist,artistName){
  delete playlist.artistName; 
  return playlist 
}