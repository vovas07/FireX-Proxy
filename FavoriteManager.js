const { BaseRepository } = require('./BaseRepository.js');

function FavoriteManager() {
    BaseRepository.call(this);
}

FavoriteManager.prototype = Object.create(BaseRepository.prototype);

/**
 * @returns {String}
 */
FavoriteManager.prototype.getFileName = function () {
    return 'FireX-mylist.json';
};

exports.FavoriteManager = FavoriteManager;