document.addEventListener('DOMContentLoaded', () => {
    // Sample audio data - replace with your actual audio files
    const audioFiles = [
        {
            id: 1,
            title: "Acoustic Guitar",
            description: "Fingerpicked acoustic guitar melody in D major",
            src: "audio/guitar.wav",
            category: "music",
            duration: "02:15",
            size: "2.4 MB"
        },
        {
            id: 2,
            title: "Interview Clip",
            description: "Excerpt from a podcast interview",
            src: "audio/interview.wav",
            category: "speech",

        },
        {
            id: 3,
            title: "Rainforest Ambience",
            description: "Natural sounds from a tropical rainforest",
            src: "audio/rainforest.wav",
            category: "effects",

        },
        {
            id: 4,
            title: "Piano Sonata",
            description: "Classical piano piece - first movement",
            src: "audio/piano.wav",
            category: "music",

        },
        {
            id: 5,
            title: "Narration Sample",
            description: "Professional voiceover narration",
            src: "audio/narration.wav",
            category: "speech",

        },
        {
            id: 6,
            title: "Thunderstorm",
            description: "Storm with thunder and rainfall",
            src: "audio/thunderstorm.wav",
            category: "effects",

        }
    ];

    const audioContainer = document.getElementById('audio-container');
    const loadingIndicator = document.getElementById('loading');
    const noResults = document.getElementById('no-results');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const filterBtns = document.querySelectorAll('.filter-btn');

    // Initially show loading
    loadingIndicator.style.display = 'block';

    // Simulate loading delay
    setTimeout(() => {
        // Hide loading indicator
        loadingIndicator.style.display = 'none';
        
        // Render all audio files
        renderAudioFiles(audioFiles);
    }, 1000);

    // Function to render audio files
    function renderAudioFiles(files) {
        // Clear container
        audioContainer.innerHTML = '';

        // Check if any files to display
        if (files.length === 0) {
            noResults.style.display = 'block';
            return;
        } else {
            noResults.style.display = 'none';
        }

        // Create audio elements
        files.forEach(file => {
            const audioItem = document.createElement('div');
            audioItem.className = `audio-item ${file.category}`;
            audioItem.setAttribute('data-category', file.category);
            audioItem.setAttribute('data-search', `${file.title} ${file.description} ${file.category}`);

            audioItem.innerHTML = `
                <div class="audio-info">
                    <h3 class="audio-title">${file.title}</h3>
                    <p class="audio-description">${file.description}</p>
                    <div class="audio-meta">
                        <span><i class="fas fa-clock"></i> ${file.duration}</span>
                        <span><i class="fas fa-file-audio"></i> ${file.size}</span>
                    </div>
                    <span class="audio-category">${file.category.charAt(0).toUpperCase() + file.category.slice(1)}</span>
                </div>
                <audio controls class="audio-player">
                    <source src="${file.src}" type="audio/wav">
                    Your browser does not support the audio element.
                </audio>
            `;

            audioContainer.appendChild(audioItem);
        });
    }

    // Search functionality
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;

        let filteredFiles = audioFiles;

        // Apply filter first
        if (activeFilter !== 'all') {
            filteredFiles = filteredFiles.filter(file => file.category === activeFilter);
        }

        // Apply search
        if (searchTerm) {
            filteredFiles = filteredFiles.filter(file => 
                file.title.toLowerCase().includes(searchTerm) || 
                file.description.toLowerCase().includes(searchTerm) ||
                file.category.toLowerCase().includes(searchTerm)
            );
        }

        renderAudioFiles(filteredFiles);
    }

    // Event listeners for search
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // Filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            performSearch();
        });
    });

    // Add animation on audio play
    document.addEventListener('play', (e) => {
        if (e.target.tagName === 'AUDIO') {
            const audioItem = e.target.closest('.audio-item');
            if (audioItem) {
                audioItem.style.transform = 'scale(1.02)';
                audioItem.style.boxShadow = '0 12px 20px rgba(0, 0, 0, 0.15)';
            }
        }
    }, true);

    // Add animation on audio pause
    document.addEventListener('pause', (e) => {
        if (e.target.tagName === 'AUDIO') {
            const audioItem = e.target.closest('.audio-item');
            if (audioItem) {
                audioItem.style.transform = '';
                audioItem.style.boxShadow = '';
            }
        }
    }, true);
});
