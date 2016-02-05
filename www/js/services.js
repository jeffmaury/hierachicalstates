angular.module('starter.services', [])

.service('Model', function() {
    this.items = [
    { title: 'Reggae', id: 0, authors: [{id:0, name:"Bob Marley"}] },
    { title: 'Chill', id: 1 },
    { title: 'Dubstep', id: 2 },
    { title: 'Indie', id: 3 , authors: [{id:1, name:"The Cure"}]},
    { title: 'Rap', id: 4 },
    { title: 'Cowbell', id: 5 }
  ];
    
    this.findPlaylist = function(id) {
        return this.items[id];
    }
    this.findAuthor = function(id,id1) {
        return this.items[id].authors[id2];
    }
});