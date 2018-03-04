var playlist = {
  Coldplay:'sparks'
}
function updatePlaylist(playlist, artistName, songTitle){
   playlist.Beatles = 'yellow submarine';
}
function removeFromPlaylist(playlist,artistName){
  delete playlist.artistName; 
  return playlist 
}