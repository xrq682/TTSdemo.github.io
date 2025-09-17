document.addEventListener('DOMContentLoaded', () => {
    // 音频数据 - 替换为你的实际音频文件
    const audioFiles = [
        {
            id: 1,
            title: "Acoustic Guitar",
            description: "Fingerpicked acoustic guitar melody in D major",
            src: "audio/guitar.wav"
        },
        {
            id: 2,
            title: "Interview Clip",
            description: "Excerpt from a podcast interview",
            src: "audio/interview.wav"
        },
        {
            id: 3,
            title: "Rainforest Ambience",
            description: "Natural sounds from a tropical rainforest",
            src: "audio/rainforest.wav"
        },
        {
            id: 4,
            title: "Piano Sonata",
            description: "Classical piano piece - first movement",
            src: "audio/piano.wav"
        },
        {
            id: 5,
            title: "Narration Sample",
            description: "Professional voiceover narration",
            src: "audio/narration.wav"
        },
        {
            id: 6,
            title: "Thunderstorm",
            description: "Storm with thunder and rainfall",
            src: "audio/thunderstorm.wav"
        },
        {
            id: 7,
            title: "Electric Bass",
            description: "Funk bass line in E minor",
            src: "audio/bass.wav"
        },
        {
            id: 8,
            title: "Lecture Excerpt",
            description: "Academic lecture on environmental science",
            src: "audio/lecture.wav"
        },
        {
            id: 9,
            title: "Jazz Drums",
            description: "Swing rhythm drum track",
            src: "audio/drums.wav"
        },
        {
            id: 10,
            title: "Ocean Waves",
            description: "Gentle ocean waves on the shore",
            src: "audio/ocean.wav"
        }
        // 添加更多音频文件...
    ];

    const audioContainer = document.getElementById('audio-container');
    const loadingIndicator = document.getElementById('loading');
    const noResults = document.getElementById('no-results');

    // 初始显示加载状态
    loadingIndicator.style.display = 'block';

    // 模拟加载延迟
    setTimeout(() => {
        // 隐藏加载指示器
        loadingIndicator.style.display = 'none';
        
        // 渲染所有音频文件
        renderAudioFiles(audioFiles);
    }, 1000);

    // 渲染音频文件的函数
    function renderAudioFiles(files) {
        // 清空容器
        audioContainer.innerHTML = '';

        // 检查是否有文件要显示
        if (files.length === 0) {
            noResults.style.display = 'block';
            return;
        } else {
            noResults.style.display = 'none';
        }

        // 创建音频元素
        files.forEach(file => {
            const audioItem = document.createElement('div');
            audioItem.className = 'audio-item';

            audioItem.innerHTML = `
                <div class="audio-info">
                    <h3 class="audio-title">${file.title}</h3>
                    <p class="audio-description">${file.description}</p>
                </div>
                <audio controls class="audio-player">
                    <source src="${file.src}" type="audio/wav">
                    Your browser does not support the audio element.
                </audio>
            `;

            audioContainer.appendChild(audioItem);
        });
    }

    // 音频播放时的动画效果
    document.addEventListener('play', (e) => {
        if (e.target.tagName === 'AUDIO') {
            const audioItem = e.target.closest('.audio-item');
            if (audioItem) {
                audioItem.style.transform = 'scale(1.02)';
                audioItem.style.boxShadow = '0 12px 20px rgba(0, 0, 0, 0.15)';
            }
        }
    }, true);

    // 音频暂停时的动画效果
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
    