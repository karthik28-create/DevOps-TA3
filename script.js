// Sample data for movies and TV shows
const moviesData = [
    {
        id: 1,
        title: "Avengers: Endgame",
        year: 2019,
        rating: 8.4,
        runtime: "181 min",
        genres: ["Action", "Adventure", "Sci-Fi"],
        plot: "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
        poster: "https://via.placeholder.com/300x450?text=Avengers+Endgame"
    },
    {
        id: 2,
        title: "The Dark Knight",
        year: 2008,
        rating: 9.0,
        runtime: "152 min",
        genres: ["Action", "Crime", "Drama"],
        plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        poster: "https://via.placeholder.com/300x450?text=The+Dark+Knight"
    },
    {
        id: 3,
        title: "Inception",
        year: 2010,
        rating: 8.8,
        runtime: "148 min",
        genres: ["Action", "Adventure", "Sci-Fi"],
        plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        poster: "https://via.placeholder.com/300x450?text=Inception"
    },
    {
        id: 4,
        title: "Pulp Fiction",
        year: 1994,
        rating: 8.9,
        runtime: "154 min",
        genres: ["Crime", "Drama"],
        plot: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        poster: "https://via.placeholder.com/300x450?text=Pulp+Fiction"
    },
    {
        id: 5,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        runtime: "142 min",
        genres: ["Drama"],
        plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        poster: "https://via.placeholder.com/300x450?text=Shawshank+Redemption"
    },
    {
        id: 6,
        title: "Interstellar",
        year: 2014,
        rating: 8.6,
        runtime: "169 min",
        genres: ["Adventure", "Drama", "Sci-Fi"],
        plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        poster: "https://via.placeholder.com/300x450?text=Interstellar"
    },
    {
        id: 7,
        title: "The Godfather",
        year: 1972,
        rating: 9.2,
        runtime: "175 min",
        genres: ["Crime", "Drama"],
        plot: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        poster: "https://via.placeholder.com/300x450?text=The+Godfather"
    },
    {
        id: 8,
        title: "Fight Club",
        year: 1999,
        rating: 8.8,
        runtime: "139 min",
        genres: ["Drama"],
        plot: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
        poster: "https://via.placeholder.com/300x450?text=Fight+Club"
    }
];

const tvShowsData = [
    {
        id: 1,
        title: "Stranger Things",
        year: "2016-",
        rating: 8.7,
        seasons: 4,
        runtime: "51 min",
        genres: ["Drama", "Fantasy", "Horror"],
        plot: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
        poster: "https://via.placeholder.com/300x450?text=Stranger+Things"
    },
    {
        id: 2,
        title: "Breaking Bad",
        year: "2008-2013",
        rating: 9.5,
        seasons: 5,
        runtime: "49 min",
        genres: ["Crime", "Drama", "Thriller"],
        plot: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
        poster: "https://via.placeholder.com/300x450?text=Breaking+Bad"
    },
    {
        id: 3,
        title: "Game of Thrones",
        year: "2011-2019",
        rating: 9.2,
        seasons: 8,
        runtime: "57 min",
        genres: ["Action", "Adventure", "Drama"],
        plot: "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
        poster: "https://via.placeholder.com/300x450?text=Game+of+Thrones"
    },
    {
        id: 4,
        title: "The Mandalorian",
        year: "2019-",
        rating: 8.7,
        seasons: 2,
        runtime: "40 min",
        genres: ["Action", "Adventure", "Sci-Fi"],
        plot: "The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.",
        poster: "https://via.placeholder.com/300x450?text=The+Mandalorian"
    },
    {
        id: 5,
        title: "Friends",
        year: "1994-2004",
        rating: 8.9,
        seasons: 10,
        runtime: "22 min",
        genres: ["Comedy", "Romance"],
        plot: "Follows the personal and professional lives of six twenty to thirty year-old friends living in the Manhattan borough of New York City.",
        poster: "https://via.placeholder.com/300x450?text=Friends"
    },
    {
        id: 6,
        title: "The Crown",
        year: "2016-",
        rating: 8.7,
        seasons: 4,
        runtime: "58 min",
        genres: ["Biography", "Drama", "History"],
        plot: "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the twentieth century.",
        poster: "https://via.placeholder.com/300x450?text=The+Crown"
    },
    {
        id: 7,
        title: "The Witcher",
        year: "2019-",
        rating: 8.2,
        seasons: 2,
        runtime: "60 min",
        genres: ["Action", "Adventure", "Fantasy"],
        plot: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
        poster: "https://via.placeholder.com/300x450?text=The+Witcher"
    },
    {
        id: 8,
        title: "The Office (US)",
        year: "2005-2013",
        rating: 9.0,
        seasons: 9,
        runtime: "22 min",
        genres: ["Comedy"],
        plot: "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.",
        poster: "https://via.placeholder.com/300x450?text=The+Office"
    }
];

// DOM Elements
const moviesContainer = document.getElementById('moviesContainer');
const tvShowsContainer = document.getElementById('tvShowsContainer');
const modal = document.getElementById('detailsModal');
const closeModal = document.querySelector('.close-modal');
const subscribeForm = document.getElementById('subscribeForm');
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const mobileMenu = document.querySelector('.mobile-menu');
const nav = document.querySelector('nav ul');

// Load movies and TV shows
function loadMovies() {
    moviesData.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}" class="card-poster">
            <div class="card-info">
                <h3 class="card-title">${movie.title}</h3>
                <div class="card-meta">
                    <span>${movie.year}</span>
                    <span class="card-rating"><i class="fas fa-star"></i> ${movie.rating}</span>
                </div>
            </div>
        `;
        movieCard.addEventListener('click', () => openModal(movie));
        moviesContainer.appendChild(movieCard);
    });
}

function loadTVShows() {
    tvShowsData.forEach(show => {
        const tvShowCard = document.createElement('div');
        tvShowCard.className = 'tvshow-card';
        tvShowCard.innerHTML = `
            <img src="${show.poster}" alt="${show.title}" class="card-poster">
            <div class="card-info">
                <h3 class="card-title">${show.title}</h3>
                <div class="card-meta">
                    <span>${show.seasons} Seasons</span>
                    <span class="card-rating"><i class="fas fa-star"></i> ${show.rating}</span>
                </div>
            </div>
        `;
        tvShowCard.addEventListener('click', () => openModal(show));
        tvShowsContainer.appendChild(tvShowCard);
    });
}

// Load trending content
function loadTrendingContent() {
    const trendingMovies = document.querySelector('#movies-tab .trending-slider');
    const trendingTV = document.querySelector('#tv-tab .trending-slider');
    
    // Get top 5 rated movies and TV shows
    const topMovies = [...moviesData].sort((a, b) => b.rating - a.rating).slice(0, 5);
    const topTVShows = [...tvShowsData].sort((a, b) => b.rating - a.rating).slice(0, 5);
    
    topMovies.forEach(movie => {
        const trendingItem = document.createElement('div');
        trendingItem.className = 'trending-item';
        trendingItem.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}" class="trending-poster">
            <div class="trending-overlay">
                <h3 class="trending-title">${movie.title}</h3>
                <div class="trending-meta">
                    <span><i class="fas fa-star"></i> ${movie.rating}</span>
                    <span>${movie.year}</span>
                </div>
            </div>
        `;
        trendingItem.addEventListener('click', () => openModal(movie));
        trendingMovies.appendChild(trendingItem);
    });
    
    topTVShows.forEach(show => {
        const trendingItem = document.createElement('div');
        trendingItem.className = 'trending-item';
        trendingItem.innerHTML = `
            <img src="${show.poster}" alt="${show.title}" class="trending-poster">
            <div class="trending-overlay">
                <h3 class="trending-title">${show.title}</h3>
                <div class="trending-meta">
                    <span><i class="fas fa-star"></i> ${show.rating}</span>
                    <span>${show.seasons} Seasons</span>
                </div>
            </div>
        `;
        trendingItem.addEventListener('click', () => openModal(show));
        trendingTV.appendChild(trendingItem);
    });
}

// Modal functions
function openModal(item) {
    document.getElementById('modalPoster').src = item.poster;
    document.getElementById('modalTitle').textContent = item.title;
    document.getElementById('modalYear').textContent = item.year;
    document.getElementById('modalRuntime').textContent = item.runtime;
    document.getElementById('modalRating').innerHTML = `<i class="fas fa-star"></i> ${item.rating}`;
    document.getElementById('modalPlot').textContent = item.plot;
    
    const genresContainer = document.getElementById('modalGenres');
    genresContainer.innerHTML = '';
    item.genres.forEach(genre => {
        const genreSpan = document.createElement('span');
        genreSpan.textContent = genre;
        genresContainer.appendChild(genreSpan);
    });
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModalFunc() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Tab functionality
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');
        
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        button.classList.add('active');
        document.getElementById(tabId).classList.add('active');
    });
});

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    loadMovies();
    loadTVShows();
    loadTrendingContent();
});

closeModal.addEventListener('click', closeModalFunc);
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModalFunc();
    }
});

subscribeForm.addEventListener