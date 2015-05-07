var storage = angular.module('tmdb', []);

storage.value('TMDB', {
    "API_KEY": undefined,
    "API_URL": 'http://api.themoviedb.org/3/',
    "IMG_URL": 'http://image.tmdb.org/'
});

storage.service('tmdbMovie', ['TMDB', '$http', function (TMDB, $http) {
    this.search = function (title, onSuccess, onError) {
        // Suchen nach Filmen anhand des Titels
        $http.get(TMDB.API_URL + 'search/movie?api_key=' + TMDB.API_KEY + '&search_type=ngram&query=' + title).
        success(function (data, status, headers, config) {
            if (onSuccess !== undefined)
                onSuccess(data, status, headers, config);
        }).
        error(function (data, status, headers, config) {
            if (onError !== undefined)
                onError(data, status, headers, config);
        });
    }

    this.details = function (id, onSuccess, onError) {
        // Liefert die Details eines Films zurück
        $http.get(TMDB.API_URL + 'movie/' + id + '?api_key=' + TMDB.API_KEY).
        success(function (data, status, headers, config) {
            if (onSuccess !== undefined)
                onSuccess(data, status, headers, config);
        }).
        error(function (data, status, headers, config) {
            if (onError !== undefined)
                onError(data, status, headers, config);
        });
    }

    this.images = function (id, onSuccess, onError) {
        // Liefert eine Liste mit Bildern zum Film
        $http.get(TMDB.API_URL + 'movie/' + id + '/images?api_key=' + TMDB.API_KEY).
        success(function (data, status, headers, config) {
            if (onSuccess !== undefined)
                onSuccess(data, status, headers, config);
        }).
        error(function (data, status, headers, config) {
            if (onError !== undefined)
                onError(data, status, headers, config);
        });
    }

    this.discover = function (onSuccess, onError) {
        $http.get(TMDB.API_URL + 'discover/movie?api_key=' + TMDB.API_KEY).
        success(function (data, status, headers, config) {
            if (onSuccess !== undefined)
                onSuccess(data, status, headers, config);
        }).
        error(function (data, status, headers, config) {
            if (onError !== undefined)
                onError(data, status, headers, config);
        });
    }

    this.alternativeTitles = function (id, country, onSuccess, onError) {
        var request = TMDB.API_URL + 'movie/' + id + '/alternative_titles?api_key=' + TMDB.API_KEY;
        if (country !== undefined)
            request = request + '&country=' + country;

        $http.get(request).
        success(function (data, status, headers, config) {
            if (onSuccess !== undefined)
                onSuccess(data, status, headers, config);
        }).
        error(function (data, status, headers, config) {
            if (onError !== undefined)
                onError(data, status, headers, config);
        });
    }

    this.credits = function (id, onSuccess, onError) {
        $http.get(TMDB.API_URL + 'movie/' + id + '/credits?api_key=' + TMDB.API_KEY).
        success(function (data, status, headers, config) {
            if (onSuccess !== undefined)
                onSuccess(data, status, headers, config);
        }).
        error(function (data, status, headers, config) {
            if (onError !== undefined)
                onError(data, status, headers, config);
        });
    }

    this.keywords = function (id, onSuccess, onError) {
        $http.get(TMDB.API_URL + 'movie/' + id + '/keywords?api_key=' + TMDB.API_KEY).
        success(function (data, status, headers, config) {
            if (onSuccess !== undefined)
                onSuccess(data, status, headers, config);
        }).
        error(function (data, status, headers, config) {
            if (onError !== undefined)
                onError(data, status, headers, config);
        });
    }

    this.releases = function (id, onSuccess, onError) {
        $http.get(TMDB.API_URL + 'movie/' + id + '/releases?api_key=' + TMDB.API_KEY).
        success(function (data, status, headers, config) {
            if (onSuccess !== undefined)
                onSuccess(data, status, headers, config);
        }).
        error(function (data, status, headers, config) {
            if (onError !== undefined)
                onError(data, status, headers, config);
        });
    }

    this.videos = function (id, onSuccess, onError) {
        $http.get(TMDB.API_URL + 'movie/' + id + '/videos?api_key=' + TMDB.API_KEY).
        success(function (data, status, headers, config) {
            if (onSuccess !== undefined)
                onSuccess(data, status, headers, config);
        }).
        error(function (data, status, headers, config) {
            if (onError !== undefined)
                onError(data, status, headers, config);
        });
    }

    this.translations = function (id, onSuccess, onError) {
        $http.get(TMDB.API_URL + 'movie/' + id + '/translations?api_key=' + TMDB.API_KEY).
        success(function (data, status, headers, config) {
            if (onSuccess !== undefined)
                onSuccess(data, status, headers, config);
        }).
        error(function (data, status, headers, config) {
            if (onError !== undefined)
                onError(data, status, headers, config);
        });
    }

    this.similar = function (id, onSuccess, onError) {
        $http.get(TMDB.API_URL + 'movie/' + id + '/similar?api_key=' + TMDB.API_KEY).
        success(function (data, status, headers, config) {
            if (onSuccess !== undefined)
                onSuccess(data, status, headers, config);
        }).
        error(function (data, status, headers, config) {
            if (onError !== undefined)
                onError(data, status, headers, config);
        });
    }

    this.reviews = function (id, onSuccess, onError) {
        $http.get(TMDB.API_URL + 'movie/' + id + '/reviews?api_key=' + TMDB.API_KEY).
        success(function (data, status, headers, config) {
            if (onSuccess !== undefined)
                onSuccess(data, status, headers, config);
        }).
        error(function (data, status, headers, config) {
            if (onError !== undefined)
                onError(data, status, headers, config);
        });
    }

    this.lists = function (id, onSuccess, onError) {
        $http.get(TMDB.API_URL + 'movie/' + id + '/lists?api_key=' + TMDB.API_KEY).
        success(function (data, status, headers, config) {
            if (onSuccess !== undefined)
                onSuccess(data, status, headers, config);
        }).
        error(function (data, status, headers, config) {
            if (onError !== undefined)
                onError(data, status, headers, config);
        });
    }

    this.upcoming = function (onSuccess, onError) {
        $http.get(TMDB.API_URL + 'movie/upcoming?api_key=' + TMDB.API_KEY).
        success(function (data, status, headers, config) {
            if (onSuccess !== undefined)
                onSuccess(data, status, headers, config);
        }).
        error(function (data, status, headers, config) {
            if (onError !== undefined)
                onError(data, status, headers, config);
        });
    }

    this.nowPlaying = function (onSuccess, onError) {
        $http.get(TMDB.API_URL + 'movie/now_playing?api_key=' + TMDB.API_KEY).
        success(function (data, status, headers, config) {
            if (onSuccess !== undefined)
                onSuccess(data, status, headers, config);
        }).
        error(function (data, status, headers, config) {
            if (onError !== undefined)
                onError(data, status, headers, config);
        });
    }

    this.popular = function (onSuccess, onError) {
        $http.get(TMDB.API_URL + 'movie/popular?api_key=' + TMDB.API_KEY).
        success(function (data, status, headers, config) {
            if (onSuccess !== undefined)
                onSuccess(data, status, headers, config);
        }).
        error(function (data, status, headers, config) {
            if (onError !== undefined)
                onError(data, status, headers, config);
        });
    }

    this.topRated = function (onSuccess, onError) {
        $http.get(TMDB.API_URL + 'movie/top_rated?api_key=' + TMDB.API_KEY).
        success(function (data, status, headers, config) {
            if (onSuccess !== undefined)
                onSuccess(data, status, headers, config);
        }).
        error(function (data, status, headers, config) {
            if (onError !== undefined)
                onError(data, status, headers, config);
        });
    }

    this.discover = function (onSuccess, onError) {
        $http.get(TMDB.API_URL + 'discover/movie?api_key=' + TMDB.API_KEY).
        success(function (data, status, headers, config) {
            if (onSuccess !== undefined)
                onSuccess(data, status, headers, config);
        }).
        error(function (data, status, headers, config) {
            if (onError !== undefined)
                onError(data, status, headers, config);

            console.log(data, status, headers, config);
        });
    }

    this.setup = function (apiKey, useSSL) {
        TMDB.API_KEY = apiKey;
        if (useSSL) {
            TMDB.API_URL = 'https://api.themoviedb.org/3/';
            TMDB.IMG_URL = 'https://image.tmdb.org/';
        } else {
            TMDB.API_URL = 'http://api.themoviedb.org/3/';
            TMDB.IMG_URL = 'http://image.tmdb.org/';
        }
    }
}]);

storage.factory('tmdbTV', ['TMDB', '$http', function (TMDB, $http) {
    this.setup = function (apiKey, useSSL) {
        TMDB.API_KEY = apiKey;
        if (useSSL) {
            TMDB.API_URL = 'https://api.themoviedb.org/3/';
            TMDB.IMG_URL = 'https://image.tmdb.org/';
        } else {
            TMDB.API_URL = 'http://api.themoviedb.org/3/';
            TMDB.IMG_URL = 'http://image.tmdb.org/';
        }
    }

    this.tv = {
        details: function (id, onSuccess, onError) {
            // Liefert die Details eines Films zurück
            $http.get(TMDB.API_URL + 'tv/' + id + '?api_key=' + TMDB.API_KEY).
            success(function (data, status, headers, config) {
                if (onSuccess !== undefined)
                    onSuccess(data, status, headers, config);
            }).
            error(function (data, status, headers, config) {
                if (onError !== undefined)
                    onError(data, status, headers, config);
            });
        },
        alternativeTitles: function (id, country, onSuccess, onError) {
            var request = TMDB.API_URL + 'tv/' + id + '/alternative_titles?api_key=' + TMDB.API_KEY;
            if (country !== undefined)
                request = request + '&country=' + country;

            $http.get(request).
            success(function (data, status, headers, config) {
                if (onSuccess !== undefined)
                    onSuccess(data, status, headers, config);
            }).
            error(function (data, status, headers, config) {
                if (onError !== undefined)
                    onError(data, status, headers, config);
            });
        },
        credits: function (id, onSuccess, onError) {
            $http.get(TMDB.API_URL + 'tv/' + id + '/credits?api_key=' + TMDB.API_KEY).
            success(function (data, status, headers, config) {
                if (onSuccess !== undefined)
                    onSuccess(data, status, headers, config);
            }).
            error(function (data, status, headers, config) {
                if (onError !== undefined)
                    onError(data, status, headers, config);
            });
        },
        externalIds: function (id, onSuccess, onError) {
            $http.get(TMDB.API_URL + 'tv/' + id + '/external_ids?api_key=' + TMDB.API_KEY).
            success(function (data, status, headers, config) {
                if (onSuccess !== undefined)
                    onSuccess(data, status, headers, config);
            }).
            error(function (data, status, headers, config) {
                if (onError !== undefined)
                    onError(data, status, headers, config);
            });
        },
        images: function (id, onSuccess, onError) {
            // Liefert eine Liste mit Bildern zum Film
            $http.get(TMDB.API_URL + 'tv/' + id + '/images?api_key=' + TMDB.API_KEY).
            success(function (data, status, headers, config) {
                if (onSuccess !== undefined)
                    onSuccess(data, status, headers, config);
            }).
            error(function (data, status, headers, config) {
                if (onError !== undefined)
                    onError(data, status, headers, config);
            });
        },
        keywords: function (id, onSuccess, onError) {
            $http.get(TMDB.API_URL + 'tv/' + id + '/keywords?api_key=' + TMDB.API_KEY).
            success(function (data, status, headers, config) {
                if (onSuccess !== undefined)
                    onSuccess(data, status, headers, config);
            }).
            error(function (data, status, headers, config) {
                if (onError !== undefined)
                    onError(data, status, headers, config);
            });
        },
        translations: function (id, onSuccess, onError) {
            $http.get(TMDB.API_URL + 'tv/' + id + '/translations?api_key=' + TMDB.API_KEY).
            success(function (data, status, headers, config) {
                if (onSuccess !== undefined)
                    onSuccess(data, status, headers, config);
            }).
            error(function (data, status, headers, config) {
                if (onError !== undefined)
                    onError(data, status, headers, config);
            });
        },
        similar: function (id, onSuccess, onError) {
            $http.get(TMDB.API_URL + 'tv/' + id + '/similar?api_key=' + TMDB.API_KEY).
            success(function (data, status, headers, config) {
                if (onSuccess !== undefined)
                    onSuccess(data, status, headers, config);
            }).
            error(function (data, status, headers, config) {
                if (onError !== undefined)
                    onError(data, status, headers, config);
            });
        },
        videos: function (id, onSuccess, onError) {
            $http.get(TMDB.API_URL + 'tv/' + id + '/videos?api_key=' + TMDB.API_KEY).
            success(function (data, status, headers, config) {
                if (onSuccess !== undefined)
                    onSuccess(data, status, headers, config);
            }).
            error(function (data, status, headers, config) {
                if (onError !== undefined)
                    onError(data, status, headers, config);
            });
        },
        onAir: function (onSuccess, onError) {
            $http.get(TMDB.API_URL + 'tv/on_the_air?api_key=' + TMDB.API_KEY).
            success(function (data, status, headers, config) {
                if (onSuccess !== undefined)
                    onSuccess(data, status, headers, config);
            }).
            error(function (data, status, headers, config) {
                if (onError !== undefined)
                    onError(data, status, headers, config);
            });
        },
        onAirToday: function (onSuccess, onError) {
            $http.get(TMDB.API_URL + 'tv/airing_today?api_key=' + TMDB.API_KEY).
            success(function (data, status, headers, config) {
                if (onSuccess !== undefined)
                    onSuccess(data, status, headers, config);
            }).
            error(function (data, status, headers, config) {
                if (onError !== undefined)
                    onError(data, status, headers, config);
            });
        },
        topRated: function (onSuccess, onError) {
            $http.get(TMDB.API_URL + 'tv/top_rated?api_key=' + TMDB.API_KEY).
            success(function (data, status, headers, config) {
                if (onSuccess !== undefined)
                    onSuccess(data, status, headers, config);
            }).
            error(function (data, status, headers, config) {
                if (onError !== undefined)
                    onError(data, status, headers, config);
            });
        },
        popular: function (onSuccess, onError) {
            $http.get(TMDB.API_URL + 'tv/popular?api_key=' + TMDB.API_KEY).
            success(function (data, status, headers, config) {
                if (onSuccess !== undefined)
                    onSuccess(data, status, headers, config);
            }).
            error(function (data, status, headers, config) {
                if (onError !== undefined)
                    onError(data, status, headers, config);
            });
        },
        discover: function (onSuccess, onError) {
            $http.get(TMDB.API_URL + 'discover/tv?api_key=' + TMDB.API_KEY).
            success(function (data, status, headers, config) {
                if (onSuccess !== undefined)
                    onSuccess(data, status, headers, config);
            }).
            error(function (data, status, headers, config) {
                if (onError !== undefined)
                    onError(data, status, headers, config);

                console.log(data, status, headers, config);
            });
        }
    }
    this.seasons = {
        season: function (id, number, onSuccess, onError) {
            $http.get(TMDB.API_URL + 'tv/' + id + '/season/' + number + '?api_key=' + TMDB.API_KEY).
            success(function (data, status, headers, config) {
                if (onSuccess !== undefined)
                    onSuccess(data, status, headers, config);
            }).
            error(function (data, status, headers, config) {
                if (onError !== undefined)
                    onError(data, status, headers, config);
            });
        },
        credits: function (id, number, onSuccess, onError) {
            $http.get(TMDB.API_URL + 'tv/' + id + '/season/' + number + '/credits?api_key=' + TMDB.API_KEY).
            success(function (data, status, headers, config) {
                if (onSuccess !== undefined)
                    onSuccess(data, status, headers, config);
            }).
            error(function (data, status, headers, config) {
                if (onError !== undefined)
                    onError(data, status, headers, config);
            });
        },
        externalIds: function (id, number, onSuccess, onError) {
            $http.get(TMDB.API_URL + 'tv/' + id + '/season/' + number + '/external_ids?api_key=' + TMDB.API_KEY).
            success(function (data, status, headers, config) {
                if (onSuccess !== undefined)
                    onSuccess(data, status, headers, config);
            }).
            error(function (data, status, headers, config) {
                if (onError !== undefined)
                    onError(data, status, headers, config);
            });
        },
        images: function (id, number, onSuccess, onError) {
            $http.get(TMDB.API_URL + 'tv/' + id + '/season/' + number + '/images?api_key=' + TMDB.API_KEY).
            success(function (data, status, headers, config) {
                if (onSuccess !== undefined)
                    onSuccess(data, status, headers, config);
            }).
            error(function (data, status, headers, config) {
                if (onError !== undefined)
                    onError(data, status, headers, config);
            });
        },
        videos: function (id, number, onSuccess, onError) {
            $http.get(TMDB.API_URL + 'tv/' + id + '/season/' + number + '/videos?api_key=' + TMDB.API_KEY).
            success(function (data, status, headers, config) {
                if (onSuccess !== undefined)
                    onSuccess(data, status, headers, config);
            }).
            error(function (data, status, headers, config) {
                if (onError !== undefined)
                    onError(data, status, headers, config);
            });
        }
    }
    this.episodes = {
        episode: function (id, sNumber, eNumber, onSuccess, onError) {
            $http.get(TMDB.API_URL + 'tv/' + id + '/season/' + sNumber + '/episode/' + eNumber + '?api_key=' + TMDB.API_KEY).
            success(function (data, status, headers, config) {
                if (onSuccess !== undefined)
                    onSuccess(data, status, headers, config);
            }).
            error(function (data, status, headers, config) {
                if (onError !== undefined)
                    onError(data, status, headers, config);
            });
        },
        credits: function (id, sNumber, eNumber, onSuccess, onError) {
            $http.get(TMDB.API_URL + 'tv/' + id + '/season/' + sNumber + '/episode/' + eNumber + '/credits?api_key=' + TMDB.API_KEY).
            success(function (data, status, headers, config) {
                if (onSuccess !== undefined)
                    onSuccess(data, status, headers, config);
            }).
            error(function (data, status, headers, config) {
                if (onError !== undefined)
                    onError(data, status, headers, config);
            });
        },
        externalIds: function (id, sNumber, eNumber, onSuccess, onError) {
            $http.get(TMDB.API_URL + 'tv/' + id + '/season/' + sNumber + '/episode/' + eNumber + '/external_ids?api_key=' + TMDB.API_KEY).
            success(function (data, status, headers, config) {
                if (onSuccess !== undefined)
                    onSuccess(data, status, headers, config);
            }).
            error(function (data, status, headers, config) {
                if (onError !== undefined)
                    onError(data, status, headers, config);
            });
        },
        images: function (id, sNumber, eNumber, onSuccess, onError) {
            $http.get(TMDB.API_URL + 'tv/' + id + '/season/' + sNumber + '/episode/' + eNumber + '/images?api_key=' + TMDB.API_KEY).
            success(function (data, status, headers, config) {
                if (onSuccess !== undefined)
                    onSuccess(data, status, headers, config);
            }).
            error(function (data, status, headers, config) {
                if (onError !== undefined)
                    onError(data, status, headers, config);
            });
        },
        videos: function (id, sNumber, eNumber, onSuccess, onError) {
            $http.get(TMDB.API_URL + 'tv/' + id + '/season/' + sNumber + '/episode/' + eNumber + '/videos?api_key=' + TMDB.API_KEY).
            success(function (data, status, headers, config) {
                if (onSuccess !== undefined)
                    onSuccess(data, status, headers, config);
            }).
            error(function (data, status, headers, config) {
                if (onError !== undefined)
                    onError(data, status, headers, config);
            });
        }
    }
}]);
