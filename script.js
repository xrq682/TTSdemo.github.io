document.addEventListener('DOMContentLoaded', () => {
    // 音频数据 - 替换为你的实际音频文件
    const audioFiles = [
        {
            id: 1,
            title: "Acoustic Guitar",
            description: "Fingerpicked acoustic guitar melody in D major",
            src: "audio/Ses01F_impro01_F000.wav",
            category: "music"
        },
        {
            id: 2,
            title: "Interview Clip",
            description: "Excerpt from a podcast interview",
            src: "audio/Ses01F_impro01_F000.wav",
            category: "speech"
        },
        {
            id: 3,
            title: "Rainforest Ambience",
            description: "Natural sounds from a tropical rainforest",
            src: "audio/Ses01F_impro01_F000.wav",
            category: "effects"
        },
        {
            id: 4,
            title: "Piano Sonata",
            description: "Classical piano piece - first movement",
            src: "audio/Ses01F_impro01_F001.wav",
            category: "music"
        },
        {
            id: 5,
            title: "Narration Sample",
            description: "Professional voiceover narration",
            src: "audio/Ses01F_impro01_F002.wav",
            category: "speech"
        },
        {
            id: 6,
            title: "Thunderstorm",
            description: "Storm with thunder and rainfall",
            src: "audio/Ses01F_impro01_F003.wav",
            category: "effects"
        },
        {
            id: 7,
            title: "Electric Bass",
            description: "Funk bass line in E minor",
            src: "audio/Ses01F_impro01_F004.wav",
            category: "music"
        },
        {
            id: 8,
            title: "Lecture Excerpt",
            description: "Academic lecture on environmental science",
            src: "audio/Ses01F_impro01_F005.wav",
            category: "speech"
        }
        // 添加更多音频文件...
    ];

    const audioContainer = document.getElementById('audio-container');
    const loadingIndicator = document.getElementById('loading');
    const noResults = document.getElementById('no-results');
    const filterBtns = document.querySelectorAll('.filter-btn');

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
            audioItem.className = `audio-item ${file.category}`;
            audioItem.setAttribute('data-category', file.category);
            audioItem.setAttribute('data-search', `${file.title} ${file.description} ${file.category}`);

            audioItem.innerHTML = `
                <div class="audio-info">
                    <h3 class="audio-title">${file.title}</h3>
                    <p class="audio-description">${file.description}</p>
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

    // 过滤功能
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 更新激活的按钮
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const activeFilter = btn.dataset.filter;
            
            // 应用过滤
            let filteredFiles = audioFiles;
            if (activeFilter !== 'all') {
                filteredFiles = filteredFiles.filter(file => file.category === activeFilter);
            }
            
            renderAudioFiles(filteredFiles);
        });
    });

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
    
